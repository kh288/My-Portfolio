/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import {
  Box,
  useColorModeValue,
  Heading,
  Grid,
  Center,
  GridItem,
  Image,
  Text,
  Button
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';
import SubCard from '../components/SubCard';
import KevinPic from '../assets/kevin-pic.png';
import KevinResume from '../assets/kevin-hernandez-resume.pdf';

import ProjectData from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';

function About() {
  const spacing = 3;
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const gridTemplate = ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'];
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const colProjectTemplate = [
    'repeat(1, 1fr)',
    'repeat(1, 1fr)',
    'repeat(2, 1fr)'
  ];

  return (
    <Box maxWidth={1024} margin="auto">
      <Card>
        <SubCard>
          <Heading as="h1" size="2xl" display="flex" justifyContent="center">
            Front-End Developer
          </Heading>
          <Box
            margin={spacing}
            bg={borderColor}
            borderStyle="solid"
            borderWidth="thin"
            borderColor={borderColor}
          />
          <Heading as="h2" size="xl" display="flex" justifyContent="center">
            Kevin Hernandez
          </Heading>
          <Center>
            <Image
              margin={spacing}
              borderRadius="100%"
              width={256}
              src={KevinPic}
            />
          </Center>
          <Box padding={spacing} marginY={spacing}>
            <Center>
              <Text>
                I&apos;m a recent UC Berkeley Extension Coding Bootcamp graduate
                looking to get into a junior frontend position.
              </Text>
            </Center>
            <Center>
              <Text>
                I&apos;m passionate about creating good products and adding
                great value to teams. Currently working part time at 2U as a Web
                Instructional Specialist on MERN stack. I&apos;m eager to learn
                and would love to have an opportunity to work with you!
              </Text>
            </Center>
          </Box>
          <Box
            bg={card}
            rounded="md"
            padding={spacing}
            marginY={spacing}
            border="solid 1px"
            borderColor={borderColor}
            gap={spacing}
          >
            <Box margin={spacing}>
              <Center>
                <p>UC Berkeley Extension Full-stack Development</p>
              </Center>
              <Center>
                <p>Allan Hancock Computer Science</p>
              </Center>
            </Box>

            <Grid templateColumns="repeat(2, 1fr)" gap={spacing}>
              <GridItem colSpan={1}>
                <Center>
                  <a target="_blank" href={KevinResume} rel="noreferrer">
                    <Button colorScheme="purple">Resume</Button>
                  </a>
                </Center>
              </GridItem>
              <GridItem colSpan={1}>
                <Center>
                  <a target="_blank" href={KevinResume} rel="noreferrer">
                    <Button colorScheme="blue">Contact</Button>
                  </a>
                </Center>
              </GridItem>
            </Grid>
          </Box>

          <Grid templateColumns={gridTemplate} gap={3}>
            <GridItem
              colSpan={1}
              bg={card}
              rounded="md"
              padding={spacing}
              border="solid 1px"
              borderColor={borderColor}
            >
              <Center>
                <ul>
                  <li>Git</li>
                  <li>Github</li>
                  <li>Heroku</li>
                  <li>Eslint</li>
                  <li>Insomnia</li>
                  <li>TDD</li>
                </ul>
              </Center>
            </GridItem>
            <GridItem
              colSpan={1}
              bg={card}
              rounded="md"
              padding={spacing}
              border="solid 1px"
              borderColor={borderColor}
            >
              <Center>
                <ul>
                  <li>React</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>jQuery</li>
                  <li>Tailwind</li>
                  <li>Chakra</li>
                  <li>Bootstrap</li>
                </ul>
              </Center>
            </GridItem>
            <GridItem
              colSpan={1}
              bg={card}
              rounded="md"
              padding={spacing}
              border="solid 1px"
              borderColor={borderColor}
            >
              <Center>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL</li>
                  <li>Sequalize ODM</li>
                  <li>MongoDB</li>
                  <li>Mongoose ODM</li>
                  <li>Bcrypt</li>
                </ul>
              </Center>
            </GridItem>
          </Grid>
          <Grid
            marginTop={spacing}
            templateColumns={colProjectTemplate}
            gap={3}
          >
            {/* START OF GENERATE PROJECTS */}
            {ProjectData.map((item) => (
              <ProjectCard
                key={uuidv4()}
                title={item.title}
                summary={item.summary}
                frontendList={item.frontendList}
                backendList={item.backendList}
                deployment={item.deployment}
                github={item.github}
                imageUrl={require(`../assets/${item.imageUrl}`)}
              />
            ))}
            {/* END OF GENERATE PROJECTS */}
          </Grid>
          <Box margin={spacing}>
            <Center>
              <p>Made with React Typescript and Chakra UI.</p>
            </Center>
          </Box>
        </SubCard>
      </Card>
    </Box>
  );
}

export default About;

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
  Image
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';
import SubCard from '../components/SubCard';
import KevinPic from '../assets/kevin-pic.png';

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
            I&apos;m Kevin Hernandez
          </Heading>
          <Center>
            <Image
              margin={spacing}
              borderRadius="100%"
              width={256}
              src={KevinPic}
            />
          </Center>
          <Box
            bg={card}
            rounded="md"
            padding={spacing}
            marginY={spacing}
            border="solid 1px"
            borderColor={borderColor}
          >
            <p>Made with React Typescript and Chakra UI.</p>
            <p>Recent UC Berkeley Extension Graduate</p>
            <p>Allan Hancock Computer Science</p>
            <p>
              Currently working part time at 2U as a Web Instructional
              Specialist on MERN stack. I&apos;m currently pursuing a front-end
              position. Feel free to checkout my projects and reach out to me,
              lets see if we can work together!
            </p>
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
          </Grid>
        </SubCard>
      </Card>
    </Box>
  );
}

export default About;

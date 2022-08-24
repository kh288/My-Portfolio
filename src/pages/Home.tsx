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
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// Component Imports
import Card from '../components/Card';
import SubCard from '../components/SubCard';
import ProjectCard from '../components/ProjectCard';
// Data Imports
import KevinPic from '../assets/kevin-headshot-square.webp';
import KevinResume from '../assets/kevin-hernandez-resume.pdf';
import SkillData from '../data/skills.json';
import ProjectData from '../data/projects.json';
import Skills from '../components/Skills';
import SocialLinks from '../components/SocialLinks';

export default function About() {
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
          <Center>
            <Heading marginBottom={spacing} as="h1" size="2xl">
              Front-End Developer
            </Heading>
          </Center>
          <Center>
            <Heading as="h2" size="xl">
              Kevin Hernandez
            </Heading>
          </Center>
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
                  <Link to="contact">
                    <Button colorScheme="blue">Contact</Button>
                  </Link>
                </Center>
              </GridItem>
            </Grid>
          </Box>
          <Grid templateColumns={gridTemplate} gap={3}>
            {/* START OF GENERATE SKILLS */}
            {SkillData.map((skills) => (
              <Skills key={uuidv4()} skillList={skills} />
            ))}
            {/* END OF GENERATE SKILLS */}
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
          <SocialLinks />
          <Center>
            <p>Made with React Typescript and Chakra UI.</p>
          </Center>
        </SubCard>
      </Card>
    </Box>
  );
}

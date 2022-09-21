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
// Component Imports
import Card from '../components/Card';
import SubCard from '../components/SubCard';
import ProjectCard from '../components/ProjectCard';
import Skills from '../components/Skills';
import SocialLinks from '../components/SocialLinks';
// Data Imports
import KevinPic from '../assets/kevin-headshot-square.jpg';
import KevinResume from '../assets/kevin-hernandez-resume.pdf';
import SkillData from '../data/skills.json';
import ProjectData from '../data/projects.json';

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
              maxWidth={256}
              maxHeight={256}
              src={KevinPic}
            />
          </Center>
          <Box id="about" padding={spacing} marginY={spacing}>
            <Center>
              <Text>
                Recent UC Berkeley Coding Bootcamp graduate seeking a front-end
                position.
              </Text>
            </Center>
            <Center>
              <Text>
                Passionate about creating effective products and adding
                intrinsic value to teams.
              </Text>
            </Center>
            <Center>
              <Text>
                Currently working at 2U Inc. as a Web Development Teaching
                Assistant on MERN stack.
              </Text>
            </Center>
          </Box>
          <Box
            bg={card}
            rounded="md"
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

            <Grid
              templateColumns="repeat(2, 1fr)"
              padding={spacing}
              gap={spacing}
            >
              <GridItem colSpan={1}>
                <Center>
                  <a target="_blank" href={KevinResume} rel="noreferrer">
                    <Button colorScheme="purple">Resume</Button>
                  </a>
                </Center>
              </GridItem>
              <GridItem colSpan={1}>
                <Center>
                  <a href="#contact">
                    <Button colorScheme="blue">Contact</Button>
                  </a>
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
            id="projects"
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
          <div id="contact">
            <Center margin={spacing}>
              <Text>Lets get in touch!</Text>
            </Center>
            <SocialLinks />
          </div>
          <Center>
            <p>Made with React Typescript and Chakra UI.</p>
          </Center>
        </SubCard>
      </Card>
    </Box>
  );
}

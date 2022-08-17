import React from 'react';
import {
  Box,
  useColorModeValue,
  Heading,
  Grid,
  // Text,
  Center,
  GridItem
} from '@chakra-ui/react';
import Card from '../components/Card';
import SubCard from '../components/SubCard';
// import KevinPic from '../assets/kevin-pic.png';

function About() {
  const margin = 3;
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const gridTemplate = ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'];
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');

  return (
    <Card>
      <SubCard>
        <Heading as="h1" size="2xl" display="flex" justifyContent="center">
          Front-End Developer
        </Heading>
        <Box
          margin={margin}
          borderStyle="solid"
          borderWidth="thin"
          borderColor={borderColor}
        />
        <Heading as="h2" size="xl" display="flex" justifyContent="center">
          I&apos;m Kevin Hernandez
        </Heading>
        <p>Made with React Typescript and Chakra UI.</p>
        <p>Recent UC Berkeley Extension Graduate</p>
        <p>Allan Hancock Computer Science</p>
        <p>
          Currently working part time at 2U as a Web Instructional Specialist on
          MERN stack. I&apos;m currently pursuing a front-end position. Feel
          free to checkout my projects and reach out to me, lets see if we can
          work together!
        </p>
      </SubCard>
      <SubCard>
        <Grid templateColumns={gridTemplate} gap={3}>
          <GridItem
            colSpan={1}
            bg={card}
            rounded="md"
            padding={3}
            border="solid 1px"
            borderColor={borderColor}
          >
            <Center>
              <ul>
                <Heading>Frontend</Heading>
                <li>React</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Chakra</li>
                <li>Stripe</li>
              </ul>
            </Center>
          </GridItem>
          <GridItem
            colSpan={1}
            bg={card}
            rounded="md"
            padding={3}
            border="solid 1px"
            borderColor={borderColor}
          >
            <Center>
              <ul>
                <Heading>Backend</Heading>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Bcrypt</li>
              </ul>
            </Center>
          </GridItem>
        </Grid>
      </SubCard>
    </Card>
  );
}

export default About;

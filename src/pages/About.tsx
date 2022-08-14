/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, useColorModeValue, Heading } from '@chakra-ui/react';
import Card from '../components/Card';
import SubCard from '../components/SubCard';
// import KevinPic from '../assets/kevin-pic.png';

function About() {
  const margin = 3;
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  const flexCenterAttr = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <Card>
      <SubCard>
        <Heading as="h1" size="3xl" {...flexCenterAttr}>
          About Me
        </Heading>
      </SubCard>
      <SubCard>
        <Heading as="h2" size="2xl" {...flexCenterAttr}>
          Front-End Developer
        </Heading>
        <Box
          margin={margin}
          borderStyle="solid"
          borderWidth="thin"
          borderColor={borderColor}
        />
        <Heading as="h3" size="xl" display="flex" justifyContent="center">
          I&apos;m Kevin Hernandez
        </Heading>
        <p>Made with React Typescript and Chakra UI.</p>
        <p>Recent UC Berkeley Extension Graduate</p>
        <p>Allan Hancock Computer Science</p>
      </SubCard>
      <SubCard>
        <p>
          Currently working part time at 2U as a Web Instructional Specialist on
          MERN stack. I&apos;m currently pursuing a front-end position. Feel
          free to checkout my projects and reach out to me, lets see if we can
          work together!
        </p>
      </SubCard>
      <SubCard>Test</SubCard>
    </Card>
  );
}

export default About;

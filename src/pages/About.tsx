/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, useColorModeValue, Heading } from '@chakra-ui/react';
import Card from '../components/Card';
// import KevinPic from '../assets/kevin-pic.png';

function About() {
  const margin = 3;
  const padding = 3;
  // const cardBackground = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const subCardBackground = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  const subCardAttr = {
    padding,
    bg: subCardBackground,
    rounded: 'lg',
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderColor
  };

  const flexCenterAttr = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <Card>
      <Box {...subCardAttr}>
        <Heading as="h1" size="3xl" {...flexCenterAttr}>
          About Me
        </Heading>
      </Box>
      <Box {...subCardAttr}>
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
      </Box>
      <Box {...subCardAttr}>
        <p>
          Currently working part time at 2U as a Web Instructional Specialist on
          MERN stack. I&apos;m currently pursuing a front-end position. Feel
          free to checkout my projects and reach out to me, lets see if we can
          work together!
        </p>
      </Box>
      <Box {...subCardAttr}>Test</Box>
    </Card>
  );
}

export default About;

import React from 'react';
import { Box, useColorModeValue, Heading } from '@chakra-ui/react';
// import KevinPic from '../assets/kevin-pic.png';

function About() {
  const margin = 3;
  const padding = 3;
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const subCard = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box
      margin={margin}
      padding={padding}
      gap={padding}
      bg={card}
      display="grid"
      justifyContent="center"
      rounded="lg"
      shadow="lg"
    >
      <Box
        padding={padding}
        bg={subCard}
        rounded="lg"
        borderStyle="solid"
        borderWidth="thin"
        borderColor={borderColor}
      >
        <Heading as="h1" size="2xl" display="flex" justifyContent="center">
          About Me
        </Heading>
      </Box>
      <Box
        padding={padding}
        bg={subCard}
        rounded="lg"
        borderStyle="solid"
        borderWidth="thin"
        borderColor={borderColor}
      >
        <Heading as="h1" size="2xl" display="flex" justifyContent="center">
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
      <Box
        padding={padding}
        bg={subCard}
        rounded="lg"
        borderStyle="solid"
        borderWidth="thin"
        borderColor={borderColor}
      >
        <p>
          Currently working part time at 2U as a Web Instructional Specialist on
          MERN stack. I&apos;m currently pursuing a front-end position. Feel
          free to checkout my projects and reach out to me, lets see if we can
          work together!
        </p>
      </Box>
    </Box>
  );
}

export default About;

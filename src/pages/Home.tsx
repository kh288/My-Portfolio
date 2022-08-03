import React from 'react';
import {
  Box, useColorModeValue, Image, Heading,
} from '@chakra-ui/react';
import KevinPic from '../assets/kevin-pic.png';

function Home() {
  const space = 2;
  // Color backgrounds
  const card = useColorModeValue('gray.100', 'gray.800');
  const subCard = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box
      margin={space}
      padding={space}
      bg={card}
      display="grid"
      justifyContent="center"
      rounded="lg"
    >
      <Box
        margin={space}
        padding={space}
        bg={subCard}
        rounded="lg"
        borderStyle="solid"
        borderWidth="thin"
        borderColor={borderColor}
      >
        <Heading justifyContent="center">About Me</Heading>
        <p>Hello! I&apos;m Kevin Hernandez.</p>
        <p>This is a simple portfolio site using Typescript and Chakra UI.</p>
      </Box>
      <Image position="absolute" right={space} bottom={space} borderRadius="50%" maxWidth={256} src={KevinPic} />
    </Box>
  );
}

export default Home;

import React from 'react';
import {
  Box,
  useColorModeValue,
  // Image,
  Heading,
} from '@chakra-ui/react';
// import KevinPic from '../assets/kevin-pic.png';

function Home() {
  const space = 2;
  // Color backgrounds
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  // const card = useColorModeValue('gray.100', 'gray.800');
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
      shadow="lg"
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
        <Heading display="flex" justifyContent="center" marginBottom={space}>About Me</Heading>
        <p>Hello! I&apos;m Kevin Hernandez.</p>
        <p>This is a simple portfolio site using React Typescript and Chakra UI.</p>
        <p>Recent UC Berkeley Extension Graduate</p>
        {/* <Image position="absolute"
        right={space} bottom={space} borderRadius="50%" maxWidth={256} src={KevinPic} /> */}
      </Box>
    </Box>
  );
}

export default Home;

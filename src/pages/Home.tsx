import React from 'react';
import {
  Box,
  useColorModeValue,
  // Image,
  Heading,
} from '@chakra-ui/react';
// import KevinPic from '../assets/kevin-pic.png';

function Home() {
  const space = 3;
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
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
        <p>Made with React Typescript and Chakra UI.</p>
        <p>Recent UC Berkeley Extension Graduate</p>
        <p>Allan Hancock Computer Science</p>
        {/* <Image position="absolute"
        right={space} bottom={space} borderRadius="50%" maxWidth={256} src={KevinPic} /> */}
      </Box>
      <Box
        margin={space}
        padding={space}
        bg={subCard}
        rounded="lg"
        borderStyle="solid"
        borderWidth="thin"
        borderColor={borderColor}
      >
        <p>
          Currently working part time at 2U as a Web Instructional Specialist on MERN stack.
          I&apos;m currently persuing a frontend position.
          Feel free to checkout my projects and reach out to me, lets see if we can work together!
        </p>
      </Box>
    </Box>
  );
}

export default Home;

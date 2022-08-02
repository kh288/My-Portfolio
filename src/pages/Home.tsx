import React from 'react';
import { Box, useColorModeValue, Image } from '@chakra-ui/react';
import KevinPic from '../assets/kevin-pic.png';

function Home() {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box
      margin="auto"
      marginY={2}
      marginX={2}
      maxWidth={800}
      bg={bg}
      display="flex"
      justifyContent="center"
      rounded="lg"
    >
      <Box>
        <p>The quick brown fox jumps over the lazy dog</p>
        <Image borderRadius="50%" maxWidth={256} src={KevinPic} />
      </Box>
    </Box>
  );
}

export default Home;

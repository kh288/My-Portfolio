import React from 'react';
import { Box, useColorModeValue, Image } from '@chakra-ui/react';
import KevinPic from '../assets/kevin-pic.png';

function Home() {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box
      margin={2}
      padding={2}
      bg={bg}
      display="grid"
      justifyContent="center"
      rounded="lg"
    >
      <p>The quick brown fox jumps over the lazy dog</p>
      <Image borderRadius="50%" maxWidth={256} src={KevinPic} />
    </Box>
  );
}

export default Home;

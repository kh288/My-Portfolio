import { Box, useColorModeValue, Image } from '@chakra-ui/react';
import KevinPic from '../assets/kevin-pic.png';

function Home() {
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Box margin='auto' maxWidth={800} bg={bg} display='flex' justifyContent='center'>
      <Image borderRadius='50%' maxWidth={256} src={KevinPic} />
    </Box>
  );
}

export default Home;
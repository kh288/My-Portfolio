import * as React from 'react';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';

function Navbar() {
  const bg = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box bg={bg} display="flex" justifyContent="space-between" marginX="auto" padding={2}>
      <Box display="flex" gap={2}>
        <Button colorScheme="purple">About</Button>
        <Button>Portfolio</Button>
        <Button>Contact</Button>
      </Box>
      <ColorModeSwitcher />
    </Box>
  );
}

export default Navbar;

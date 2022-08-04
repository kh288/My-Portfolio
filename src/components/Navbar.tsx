import * as React from 'react';
import {
  Box, Button, useColorModeValue, Icon, IconButton,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import ColorModeSwitcher from './ColorModeSwitcher';

function Navbar() {
  // const bg = useColorModeValue('gray.100', 'gray.800');
  const bg = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');

  return (
    <Box bg={bg} display="flex" justifyContent="space-between" marginX="auto" padding={2} shadow="lg">
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        icon={<Icon as={FaHome} />}
        aria-label="Home Button"
      />
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

import React from 'react';
import {
  Box,
  Button,
  useColorModeValue,
  Icon,
  IconButton
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import ColorModeSwitcher from './ColorModeSwitcher';

export default function Navbar() {
  const bg = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const spacing = 1;

  return (
    <Box
      bg={bg}
      display="flex"
      justifyContent="space-between"
      marginX="auto"
      padding={2}
      marginBottom={spacing}
      shadow="lg"
    >
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        icon={<Icon as={FaHome} />}
        aria-label="Home Button"
      >
        <Button>About</Button>
      </IconButton>
      <Box display="flex" gap={spacing}>
        <a href="#about">
          <Button variant="ghost">About</Button>
        </a>
        <a href="#projects">
          <Button variant="ghost">Projects</Button>
        </a>
        <a href="#contact">
          <Button variant="ghost">Contact</Button>
        </a>
      </Box>
      <ColorModeSwitcher />
    </Box>
  );
}

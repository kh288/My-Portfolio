import * as React from 'react';
import {
  Box,
  Button,
  useColorModeValue,
  Icon,
  IconButton
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';

type pageProps = {
  currentPage: string;
  handleCurrentPage: (input: string) => void;
};

function Navbar({ currentPage, handleCurrentPage }: pageProps) {
  const bg = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const margin = 3;
  const padding = 3;

  return (
    <Box
      bg={bg}
      display="flex"
      justifyContent="space-between"
      marginX="auto"
      padding={padding}
      marginBottom={margin}
      shadow="lg"
    >
      <Link to="/">
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          icon={<Icon as={FaHome} />}
          onClick={() => handleCurrentPage('Home')}
          aria-label="Home Button"
        >
          <Button>About</Button>
        </IconButton>
      </Link>
      <Box display="flex" gap={margin}>
        <Link to="/">
          <Button variant="ghost">About</Button>
        </Link>
        <Link to="projects">
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link to="contact">
          <Button variant="ghost">Contact</Button>
        </Link>
      </Box>
      <ColorModeSwitcher />
    </Box>
  );
}

export default Navbar;

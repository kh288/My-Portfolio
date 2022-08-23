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
      <Link to="/my-portfolio/">
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
      <Box display="flex" gap={spacing}>
        <Link to="/my-portfolio/">
          <Button variant="ghost">About</Button>
        </Link>
        <Link to="/my-portfolio/projects">
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link to="/my-portfolio/contact">
          <Button variant="ghost">Contact</Button>
        </Link>
      </Box>
      <ColorModeSwitcher />
    </Box>
  );
}

export default Navbar;

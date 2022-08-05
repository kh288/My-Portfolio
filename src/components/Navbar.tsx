import * as React from 'react';
import {
  Box,
  Button,
  useColorModeValue,
  Icon,
  IconButton
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
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
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        icon={<Icon as={FaHome} />}
        onClick={() => handleCurrentPage('Home')}
        aria-label="Home Button"
      />
      <Box display="flex" gap={margin}>
        <Button
          colorScheme={currentPage === 'Home' ? 'purple' : 'gray'}
          onClick={() => handleCurrentPage('Home')}
        >
          About
        </Button>
        <Button
          colorScheme={currentPage === 'Projects' ? 'purple' : 'gray'}
          onClick={() => handleCurrentPage('Projects')}
        >
          Projects
        </Button>
        <Button
          colorScheme={currentPage === 'Contact' ? 'purple' : 'gray'}
          onClick={() => handleCurrentPage('Contact')}
        >
          Contact
        </Button>
      </Box>
      <ColorModeSwitcher />
    </Box>
  );
}

export default Navbar;

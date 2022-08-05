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
  handleCurrentPage: any;
};

function Navbar({ currentPage, handleCurrentPage }: pageProps) {
  const bg = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');

  return (
    <Box
      bg={bg}
      display="flex"
      justifyContent="space-between"
      marginX="auto"
      padding={2}
      marginBottom={3}
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
      <Box display="flex" gap={2}>
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

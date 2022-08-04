import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const gradientL = 'linear(to-l, blue.500, purple.500 60%)';

  return (
    <Box bgGradient={gradientL} height="calc(100vh)">
      <Navbar />
      <Box maxWidth={800} mx="auto">
        <Home />
      </Box>
    </Box>
  );
}

export default App;

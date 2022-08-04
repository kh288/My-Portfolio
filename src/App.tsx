import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const gradientL = 'linear(to-l, blue.500, purple.500 60%)';
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case ('Projects'):
        return <Projects />;
      case ('Contact'):
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handleCurrentPage = (page: string) => setCurrentPage(page);

  return (
    <Box bgGradient={gradientL} height="calc(100vh)">
      <Navbar currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
      <Box maxWidth={800} mx="auto">
        {renderPage()}
      </Box>
    </Box>
  );
}

export default App;

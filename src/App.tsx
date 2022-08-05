import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const blueToPurple = 'linear(to-l, blue.500, purple.500 60%)';
  const gradientL = 'linear(to-b, #00000000, white)';
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handleCurrentPage = (page: string) => setCurrentPage(page);

  return (
    <Box bgGradient={gradientL}>
      <Box bgGradient={blueToPurple} height="calc(100vh)">
        <Navbar
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
        <motion.div animate={{ y: 0 }} initial={{ y: -50 }}>
          <Box maxWidth={800} mx="auto">
            {renderPage()}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default App;

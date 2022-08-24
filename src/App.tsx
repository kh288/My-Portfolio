import React, { useState } from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default function App() {
  const blue = useColorModeValue('#3182CE', '#2C5282');
  const purple = useColorModeValue('#805AD5', '#553C9A');
  const blueToPurple = `linear(to-l, ${blue}, ${purple} 60%)`;
  const bgColor = useColorModeValue('white', 'gray.800');
  const gradientL = `linear(to-b, #00000000, ${bgColor})`;

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
    <BrowserRouter>
      <Box bgGradient={blueToPurple}>
        <Box bgGradient={gradientL} height="512px">
          <Navbar
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
          />
          <motion.div animate={{ y: 0 }} initial={{ y: -50 }}>
            <Routes>
              <Route path="/my-portfolio/" element={<Home />} />
              <Route path="/my-portfolio/projects" element={<Projects />} />
              <Route path="/my-portfolio/contact" element={<Contact />} />
            </Routes>
            {/* <Box>{renderPage()}</Box> */}
          </motion.div>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

import React, { useState } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  const blue = useColorModeValue('#3182CE', '#2C5282');
  const purple = useColorModeValue('#805AD5', '#553C9A');
  const blueToPurple = `linear(to-l, ${blue}, ${purple} 60%)`;
  const bgColor = useColorModeValue('white', 'gray.800');
  const gradientL = `linear(to-b, #00000000, ${bgColor})`;

  return (
    <Box bgGradient={blueToPurple}>
      <Box bgGradient={gradientL} height="512px">
        <Navbar />
        <motion.div animate={{ y: 0 }} initial={{ y: -50 }}>
          <Home />
        </motion.div>
      </Box>
    </Box>
  );
}

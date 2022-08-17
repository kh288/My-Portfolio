/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

function Card({ children }: any) {
  return (
    <Box
      padding={3}
      bg={useColorModeValue('gray.200', 'gray.700')}
      rounded="lg"
      borderStyle="solid"
      borderWidth="thin"
      borderColor={useColorModeValue('gray.300', 'gray.600')}
    >
      {children}
    </Box>
  );
}

export default Card;

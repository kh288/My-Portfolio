/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

function Card({ children }: any) {
  const padding = 3;
  const subCardBackground = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box
      padding={padding}
      bg={subCardBackground}
      rounded="lg"
      borderStyle="solid"
      borderWidth="thin"
      borderColor={borderColor}
    >
      {children}
    </Box>
  );
}

export default Card;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

function Card({ children }: any) {
  return (
    <Box
      margin={3}
      padding={3}
      gap={3}
      bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.600')}
      display="grid"
      justifyContent="center"
      rounded="lg"
      shadow="lg"
    >
      {children}
    </Box>
  );
}

export default Card;

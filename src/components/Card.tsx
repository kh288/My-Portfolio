/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

function Card({ children }: any) {
  const margin = 3;
  const padding = 3;
  const cardBackground = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');

  return (
    <Box
      margin={margin}
      padding={padding}
      gap={padding}
      bg={cardBackground}
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

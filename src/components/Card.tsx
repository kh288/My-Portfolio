import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Card({ children }: Props) {
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

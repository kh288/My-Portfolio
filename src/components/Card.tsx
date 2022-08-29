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
      bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.600')}
      rounded="lg"
      shadow="lg"
    >
      {children}
    </Box>
  );
}

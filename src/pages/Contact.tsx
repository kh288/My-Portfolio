import {
  Box,
  FormControl,
  Heading,
  FormLabel,
  Input,
  useColorModeValue,
  Textarea
} from '@chakra-ui/react';
import React from 'react';

function Contact() {
  const margin = 3;
  const padding = 3;
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const subCard = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box
      margin={margin}
      padding={padding}
      gap={padding}
      bg={card}
      display="grid"
      justifyContent="center"
      rounded="lg"
      shadow="lg"
    >
      <Box
        padding={padding}
        bg={subCard}
        rounded="lg"
        borderStyle="solid"
        borderWidth="thin"
        borderColor={borderColor}
      >
        <Heading display="flex" justifyContent="center" marginBottom={margin}>
          Contact
        </Heading>
      </Box>
      <Box
        padding={padding}
        bg={subCard}
        rounded="lg"
        borderStyle="solid"
        borderWidth="thin"
        borderColor={borderColor}
      >
        <FormControl borderColor={borderColor} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            bg={card}
            marginBottom={margin}
            placeholder="example@email.com"
          />
          <FormLabel>Title</FormLabel>
          <Input bg={card} marginBottom={margin} placeholder="Title" />
          <FormLabel>Message</FormLabel>
          <Textarea bg={card} placeholder="Your Message" />
        </FormControl>
      </Box>
    </Box>
  );
}

export default Contact;

import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Heading,
  FormLabel,
  Input,
  useColorModeValue,
  Textarea,
  Button,
  Grid,
  Text
} from '@chakra-ui/react';

function Contact() {
  const margin = 3;
  const padding = 3;
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const subCard = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  // const [formInfo, setFormInfo] = useState({
  //   email: '',
  //   title: '',
  //   message: ''
  // });

  // const handleInputChange = function (e: any) {
  //   setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  // };

  // const handleFormSubmit = function (e: any) {};

  return (
    <Box maxWidth={1024} margin="auto">
      <Grid
        margin={margin}
        padding={padding}
        gap={padding}
        bg={card}
        rounded="lg"
        shadow="lg"
      >
        <Grid
          padding={padding}
          bg={subCard}
          rounded="lg"
          borderStyle="solid"
          borderWidth="thin"
          borderColor={borderColor}
          justifyContent="center"
        >
          <Heading>Contact</Heading>
        </Grid>
        <Box
          padding={padding}
          bg={subCard}
          rounded="lg"
          borderStyle="solid"
          borderWidth="thin"
          borderColor={borderColor}
        >
          <FormControl borderColor={borderColor} isRequired>
            <Grid gap={margin}>
              <FormLabel>Email</FormLabel>
              <Input
                bg={card}
                placeholder="example@email.com"
                borderStyle="solid"
                borderWidth="thin"
                borderColor={borderColor}
              />
              <FormLabel>Title</FormLabel>
              <Input
                bg={card}
                placeholder="Title of your message"
                borderStyle="solid"
                borderWidth="thin"
                borderColor={borderColor}
              />
              <FormLabel>Message</FormLabel>
              <Textarea
                bg={card}
                placeholder="Your Message"
                borderStyle="solid"
                borderWidth="thin"
                borderColor={borderColor}
              />
              <Button colorScheme="purple">Submit</Button>
              <Text textAlign="center">
                * All fields are required to submit
              </Text>
            </Grid>
          </FormControl>
        </Box>
      </Grid>
    </Box>
  );
}

export default Contact;

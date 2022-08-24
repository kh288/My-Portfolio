import React from 'react';
import {
  Box,
  // FormControl,
  Heading,
  // FormLabel,
  // Input,
  useColorModeValue,
  // Textarea,
  // Button,
  Grid,
  Text,
  Center
} from '@chakra-ui/react';
import SocialLinks from '../components/SocialLinks';
// import SubCard from '../components/SubCard';
import Card from '../components/Card';

export default function Contact() {
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
          <Center>
            <Text>
              If you&apos;d like to get in contact with me, ideally reach out
              through email or linkedin.
            </Text>
          </Center>
          <Card>
            <Center>
              <Text>kevin.hernandez288@gmail.com</Text>
            </Center>
          </Card>
          {/* <FormControl borderColor={borderColor} isRequired>
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
          </FormControl> */}
          <SocialLinks />
        </Box>
      </Grid>
    </Box>
  );
}

import React from 'react';
import {
  Box,
  useColorModeValue,
  Heading,
  Grid,
  Center,
  GridItem,
  Image
} from '@chakra-ui/react';
import KevinPic from '../assets/kevin-pic.png';

function Home() {
  const spacing = 3;
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const gridTemplate = ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'];
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');

  return (
    <Box marginTop={12}>
      <Heading
        margin={spacing}
        as="h1"
        size="2xl"
        display="flex"
        justifyContent="center"
      >
        Front-End Developer
      </Heading>
      <Heading
        margin={spacing}
        marginBottom={36}
        as="h2"
        size="xl"
        display="flex"
        justifyContent="center"
      >
        Kevin Hernandez
      </Heading>
      <Box bg="purple.500" width="full" height={400} padding={spacing}>
        <Center>
          <Image margin="-50%" borderRadius="100%" width={256} src={KevinPic} />
        </Center>
      </Box>
      <Center marginBottom={3}>
        <Heading>Skills</Heading>
      </Center>
      <Grid templateColumns={gridTemplate} gap={spacing}>
        <GridItem
          colSpan={1}
          bg={card}
          rounded="md"
          padding={spacing}
          border="solid 1px"
          borderColor={borderColor}
        >
          <Center>
            <ul>
              <Heading>Frontend</Heading>
              <li>React</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>Chakra</li>
            </ul>
          </Center>
        </GridItem>
        <GridItem
          colSpan={1}
          bg={card}
          rounded="md"
          padding={spacing}
          border="solid 1px"
          borderColor={borderColor}
        >
          <Center>
            <ul>
              <Heading>Backend</Heading>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Bcrypt</li>
            </ul>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home;

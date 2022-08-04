import React from 'react';
import {
  Box, Heading, useColorModeValue, Image, Grid, GridItem,
} from '@chakra-ui/react';
import New5hark from '../assets/new5hark-todo-list-app.png';
import SocialBurger from '../assets/social-burger-app.png';
import SocialMediaAPI from '../assets/social-media-api.png';

function Projects() {
  const space = 3;
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const subCard = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Box
      margin={space}
      padding={space}
      bg={card}
      display="grid"
      justifyContent="center"
      rounded="lg"
      shadow="lg"
    >
      <Box
        margin={space}
        padding={space}
        bg={subCard}
        rounded="lg"
        borderStyle="solid"
        borderWidth="thin"
        borderColor={borderColor}
      >
        <Heading display="flex" justifyContent="center" marginBottom={space}>Projects</Heading>
        {/* <p>
          Here&apos;s some projects I&apos;ve worked on
          throughout the UC Berkeley Extension program
        </p> */}
      </Box>
      <Box
        margin={space}
        padding={space}
        bg={subCard}
        rounded="lg"
        borderStyle="solid"
        borderWidth="thin"
        borderColor={borderColor}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={space}>
          <GridItem colSpan={1}><Image src={New5hark} /></GridItem>
          <GridItem colSpan={1}><Image src={SocialBurger} /></GridItem>
          <GridItem colSpan={1}><Image src={SocialMediaAPI} /></GridItem>
          {/* <Box>
          </Box> */}

        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;

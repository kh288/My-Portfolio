import React from 'react';
import {
  Box,
  Heading,
  useColorModeValue,
  Image,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
  Center
} from '@chakra-ui/react';
import New5hark from '../assets/new5hark-todo-list-app.png';
import SocialBurger from '../assets/social-burger-app.png';
import SocialMediaAPI from '../assets/social-media-api.png';
import StockPortfolioApp from '../assets/stock-portfolio-analyzer-app.png';

function Projects() {
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
          Projects
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
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem colSpan={1}>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <Center>
                  <Heading size="md">Frontend</Heading>
                </Center>
                <Center>
                  <UnorderedList>
                    <ListItem>React</ListItem>
                    <ListItem>Sass</ListItem>
                    <ListItem>Chart.js</ListItem>
                    <ListItem>Tailwind.css</ListItem>
                    <ListItem>Daisy UI</ListItem>
                  </UnorderedList>
                </Center>
              </GridItem>
              <GridItem>
                <Center>
                  <Heading size="md">Backend</Heading>
                </Center>
                <Center>
                  <UnorderedList>
                    <ListItem>Node.js</ListItem>
                    <ListItem>Express</ListItem>
                    <ListItem>MongoDB</ListItem>
                    <ListItem>Mongoose ODM</ListItem>
                    <ListItem>JSON WebToken</ListItem>
                  </UnorderedList>
                </Center>
              </GridItem>
            </Grid>
            <Image src={New5hark} />
          </GridItem>
          <GridItem colSpan={1}>
            <Image src={SocialBurger} />
          </GridItem>
          <GridItem colSpan={1}>
            <Image src={SocialMediaAPI} />
          </GridItem>
          <GridItem>
            <Image src={StockPortfolioApp} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;

import React from 'react';
import {
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Link,
  ListItem,
  UnorderedList,
  useColorModeValue,
  Text,
  Image
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import New5hark from '../assets/new5hark-todo-list-app.png';
// import SocialBurger from '../assets/social-burger-app.png';
// import SocialMediaAPI from '../assets/social-media-api.png';
// import StockPortfolioApp from '../assets/stock-portfolio-analyzer-app.png';

type props = {
  title: string;
  summary: string;
  frontend: Array<string>;
  backend: Array<string>;
  imageUrl: string;
};

function ProjectCard({ title, summary, frontend, backend, imageUrl }: props) {
  const margin = 3;
  const padding = 3;
  const card = useColorModeValue('whiteAlpha.600', 'blackAlpha.600');
  const subCard = useColorModeValue('gray.200', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const colProjectTemplate = [
    'repeat(1, 1fr)',
    'repeat(1, 1fr)',
    'repeat(2, 1fr)'
  ];

  return (
    <GridItem
      colSpan={1}
      bg={card}
      rounded="md"
      padding={padding}
      border="solid 1px"
      borderColor={borderColor}
      marginBottom={margin}
    >
      <Heading marginBottom={margin} textAlign="center" size="lg">
        New5hark
      </Heading>
      <Text>
        New5hark is a simple day joyfull builder app, where users can create
        their own activities and keep track of their activities. Users will have
        the ability to create an account and have access to their own dashboard
        which will contain their own activities and tracking status. Each
        Activity is stored onto a MongoDB database and accessed via this React
        app.
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={padding} marginTop={margin}>
        <GridItem colSpan={1}>
          <Heading paddingLeft="3" size="md">
            Frontend
          </Heading>
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
        <GridItem colSpan={1}>
          <Heading paddingLeft="3" size="md">
            Backend
          </Heading>
          <Center>
            <UnorderedList>
              <ListItem>Node.js</ListItem>
              <ListItem>Express</ListItem>
              <ListItem>MongoDB</ListItem>
              <ListItem>Mongoose ODM</ListItem>
              <ListItem>REST API Routes</ListItem>
            </UnorderedList>
          </Center>
        </GridItem>
        <Center>
          <Link href="https://new5hark.herokuapp.com/" isExternal>
            <Button colorScheme="purple">
              Deployment
              <ExternalLinkIcon ml={margin} />
            </Button>
          </Link>
        </Center>
        <Center>
          <Link href="https://github.com/sharkby7e/new5hark" isExternal>
            <Button colorScheme="blue">
              Github <ExternalLinkIcon ml={margin} />
            </Button>
          </Link>
        </Center>
      </Grid>
      <Image src={New5hark} />
    </GridItem>
  );
}

export default ProjectCard;

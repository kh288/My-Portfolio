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
  Center,
  Button,
  Text,
  Link
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
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
  // 750px width minimum for 2 cols

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
        <Grid templateColumns="repeat(2, 1fr)" gap={margin}>
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
              New5hark is a simple day joyfull builder app, where users can
              create their own activities and keep track of their activities.
              Users will have the ability to create an account and have access
              to their own dashboard which will contain their own activities and
              tracking status. Each Activity is stored onto a MongoDB database
              and accessed via this React app.
            </Text>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={padding}
              marginTop={margin}
            >
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
                    Deployed Link
                    <ExternalLinkIcon ml={margin} />
                  </Button>
                </Link>
              </Center>
              <Center>
                <Link href="https://github.com/sharkby7e/new5hark" isExternal>
                  <Button colorScheme="blue">
                    Github Repo <ExternalLinkIcon ml={margin} />
                  </Button>
                </Link>
              </Center>
            </Grid>
            <Image src={New5hark} />
          </GridItem>
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
              Soical Burger
            </Heading>
            <Text>
              Social Burger is a site in which users interact with each other by
              sharing their own customized burger. On social burger, our main
              goal is to connect with people with a fun and interactive
              experience. In this app users are greeted by the home page with
              other user&apos;s posted burgers. The user is promted to login
              before they are able to create their own burger or comment on a
              burger. If the user does not already have an account, they can
              register. After that the user my comment on burgers, like them,
              create their own, and viewe burgers that they have previously made
              if applicable.
            </Text>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={padding}
              marginTop={margin}
            >
              <GridItem colSpan={1}>
                <Heading paddingLeft="3" size="md">
                  Frontend
                </Heading>
                <Center>
                  <UnorderedList>
                    <ListItem>Handlebars</ListItem>
                    <ListItem>CSS</ListItem>
                    <ListItem>Javascript</ListItem>
                    <ListItem>Bootstrap</ListItem>
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
                    <ListItem>MySQL</ListItem>
                    <ListItem>Sequelize ODM</ListItem>
                    <ListItem>REST API Routes</ListItem>
                  </UnorderedList>
                </Center>
              </GridItem>
              <Center>
                <Link href="https://social-burger.herokuapp.com" isExternal>
                  <Button colorScheme="purple">
                    Deployed Link
                    <ExternalLinkIcon ml={margin} />
                  </Button>
                </Link>
              </Center>
              <Center>
                <Link href="https://github.com/kh288/Social-Burger" isExternal>
                  <Button colorScheme="blue">
                    Github Repo <ExternalLinkIcon ml={margin} />
                  </Button>
                </Link>
              </Center>
            </Grid>
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

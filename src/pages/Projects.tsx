import React from 'react';
import { Box, Heading, useColorModeValue, Grid } from '@chakra-ui/react';
import New5hark from '../assets/new5hark-todo-list-app.png';
import SocialBurger from '../assets/social-burger-app.png';
import SocialMediaAPI from '../assets/social-media-api.png';
import StockPortfolioApp from '../assets/stock-portfolio-analyzer-app.png';
import ProjectCard from '../components/ProjectCard';

function Projects() {
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
        <Grid templateColumns={colProjectTemplate} gap={margin}>
          <ProjectCard
            title="New5hark"
            summary="New5hark is a simple day joyfull builder app, where users can create
            their own activities and keep track of their activities. Users will have
            the ability to create an account and have access to their own dashboard
            which will contain their own activities and tracking status. Each
            Activity is stored onto a MongoDB database and accessed via this React
            app."
            frontendList={[
              'React.js',
              'Sass',
              'Chart.js',
              'Tailwind.css',
              'Daisy UI'
            ]}
            backendList={[
              'Node.js',
              'Express.js',
              'MongoDB',
              'Mongoose ODM',
              'REST API Routes'
            ]}
            deployment="https://new5hark.herokuapp.com/"
            github="https://github.com/sharkby7e/new5hark"
            imageUrl={New5hark}
          />
          <ProjectCard
            title="Soical Burger"
            summary="Social Burger is a site in which users interact with each other by
            sharing their own customized burger. On social burger, our main
            goal is to connect with people with a fun and interactive
            experience. In this app users are greeted by the home page with
            other user's posted burgers. The user is promted to login
            before they are able to create their own burger or comment on a
            burger. If the user does not already have an account, they can
            register. After that the user my comment on burgers, like them,
            create their own, and viewe burgers that they have previously made
            if applicable."
            frontendList={['Handlebars.js', 'CSS', 'Javascript', 'Bootstrap']}
            backendList={[
              'Node.js',
              'Express',
              'MySQL',
              'Sequelize ODM',
              'REST API Routes'
            ]}
            deployment="ttps://social-burger.herokuapp.com"
            github="https://github.com/kh288/Social-Burger"
            imageUrl={SocialBurger}
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;

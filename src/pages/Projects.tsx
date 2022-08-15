/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { Heading, Grid } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import ProjectData from '../data/projects.json';

// import New5hark from '../assets/new5hark-todo-list-app.png';
// import SocialBurger from '../assets/social-burger-app.png';
// import SocialMediaAPI from '../assets/social-media-api.png';
// import StockPortfolioApp from '../assets/stock-portfolio-analyzer-app.png';

import ProjectCard from '../components/ProjectCard';
import Card from '../components/Card';
import SubCard from '../components/SubCard';

function Projects() {
  const margin = 3;
  const colProjectTemplate = [
    'repeat(1, 1fr)',
    'repeat(1, 1fr)',
    'repeat(2, 1fr)'
  ];

  return (
    <Card>
      <SubCard>
        <Heading display="flex" justifyContent="center">
          Projects
        </Heading>
      </SubCard>
      <SubCard>
        {ProjectData.map((item) => (
          <Grid
            key={uuidv4()}
            templateColumns={colProjectTemplate}
            gap={margin}
          >
            <ProjectCard
              key={uuidv4()}
              title={item.title}
              summary={item.summary}
              frontendList={item.frontendList}
              backendList={item.backendList}
              deployment={item.deployment}
              github={item.github}
              imageUrl={require(`../assets/${item.imageUrl}`)}
            />
          </Grid>
        ))}
        {/* <Grid templateColumns={colProjectTemplate} gap={margin}>
          <ProjectCard
            title="New5hark"
            summary="New5hark (pronounced NewShark) is a simple day joyful builder app, where users can create
            their own activities and keep track of them too. Users will have
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
              'REST API Routes',
              'Bcrypt'
            ]}
            deployment="https://new5hark.herokuapp.com/"
            github="https://github.com/sharkby7e/new5hark"
            imageUrl={New5hark}
          />
          <ProjectCard
            title="Social Burger"
            summary="Social Burger is a site in which users interact with each other by
            sharing their own customized burger. On social burger, our main
            goal is to connect with people with a fun and interactive
            experience. In this app users are greeted by the home page with
            other user's posted burgers. The user is prompted to login
            before they are able to create their own burger or comment on a
            burger. If the user does not already have an account, they can
            register. After that the user my comment on burgers, like them,
            create their own, and view burgers that they have previously made
            if applicable."
            frontendList={['Handlebars.js', 'CSS', 'Javascript', 'Bootstrap']}
            backendList={[
              'Node.js',
              'Express',
              'MySQL',
              'Sequelize ODM',
              'REST API Routes',
              'Bcrypt'
            ]}
            deployment="ttps://social-burger.herokuapp.com"
            github="https://github.com/kh288/Social-Burger"
            imageUrl={SocialBurger}
          />
          <ProjectCard
            title="Social Network API"
            summary="This is a simple a basic API framework for a social media platform. This backend application is powered by MongoDB and Mongoose ODM via Node.js and Express.js"
            frontendList={['None']}
            backendList={[
              'Node.js',
              'Express.js',
              'MongoDB',
              'Mongoose ODM',
              'Bcrypt'
            ]}
            deployment="https://kevins-social-media-api.herokuapp.com/api/users"
            github="https://github.com/kh288/Social-Network-API"
            imageUrl={SocialMediaAPI}
          />
          <ProjectCard
            title="Stock Portfolio Analyzer"
            summary="In this app you get to build a stock portfolio with our portfolio page, this lets you pick as many positions as you want. With this you can then save it into into local storage and navigate to the chart tab to see additional stats and visualize the progress that stock has gained (or lost) over a year's time."
            frontendList={[
              'HTML, CSS, Javascript',
              'Chart.js',
              'Alpha Advantage API',
              'Portfolio Optimizer API',
              'jQuery',
              'Tailwind.css'
            ]}
            backendList={['None']}
            deployment="https://kh288.github.io/Stock-Portfolio-Analyzer/"
            github="https://github.com/kh288/Stock-Portfolio-Analyzer"
            imageUrl={StockPortfolioApp}
          /> */}
      </SubCard>
    </Card>
  );
}

export default Projects;

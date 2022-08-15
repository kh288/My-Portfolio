/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { Heading, Grid } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import ProjectData from '../data/projects.json';

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
        <Grid templateColumns={colProjectTemplate} gap={margin}>
          {ProjectData.map((item) => (
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
          ))}
        </Grid>
      </SubCard>
    </Card>
  );
}

export default Projects;

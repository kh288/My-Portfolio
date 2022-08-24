/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { Heading, Grid, Box } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import ProjectData from '../data/projects.json';

import ProjectCard from '../components/ProjectCard';
import Card from '../components/Card';
import SubCard from '../components/SubCard';

export default function Projects() {
  const colProjectTemplate = [
    'repeat(1, 1fr)',
    'repeat(1, 1fr)',
    'repeat(2, 1fr)'
  ];

  return (
    <Box maxWidth={1024} margin="auto">
      <Card>
        <SubCard>
          <Heading display="flex" justifyContent="center">
            Projects
          </Heading>
        </SubCard>
        <SubCard>
          <Grid templateColumns={colProjectTemplate} gap={3}>
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
    </Box>
  );
}

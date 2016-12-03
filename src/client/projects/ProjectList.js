import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ProjectListItem from './ProjectListItem';

const ProjectList = ({ data }) => data.loading ? <h1>Loading...</h1> : (
  <div>
    {data.projects.map(project => (
      <ProjectListItem key={project.id} project={project} />
    ))}
  </div>
);

const projectsQuery = gql`query Projects {
  projects {
    id
    name
    description
    githubUrl
    liveUrl
    skillsUsed
  }
}`;

export default graphql(projectsQuery)(ProjectList);

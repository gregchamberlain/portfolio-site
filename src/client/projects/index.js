import React from 'react';
import { graphql } from 'react-apollo';

import projectsQuery from './projectsQuery.gql';

import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
// console.log(ProjectList);

const ProjectIndex = ({ data }) => (
  <div>
    <ProjectForm />
    <hr />
    { data.loading ? <h3>Loading...</h3> : <ProjectList projects={data.projects}/> }
  </div>
);

export default graphql(projectsQuery)(ProjectIndex);

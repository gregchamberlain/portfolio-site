import React from 'react';
import { graphql } from 'react-apollo';

import query from './projectsQuery.gql';

import Section from '../Section';
import ProjectListItem from './ProjectListItem';

const ProjectList = ({ data }) => data.loading ? <div>'Loading...'</div> : (
  <Section title="Projects">
    { data.projects.map(project => <ProjectListItem key={project.id} project={project} />)}
  </Section>
);

export default graphql(query, {
  options: { variables: { ids: ['584107bfef442d27fc77b0a5', '5848fb106652c06ba7174162'] } }
})(ProjectList);

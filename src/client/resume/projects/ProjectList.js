import React from 'react';
import { graphql } from 'react-apollo';

import query from './projectsQuery.gql';

import Section from '../Section';

const ProjectList = ({ data }) => data.loading ? <div>'Loading...'</div> : (
  <Section title="Projects">
    {JSON.stringify(data.projects)}
  </Section>
);

export default graphql(query, {
  options: { variables: { ids: ['584214b14a19f110f154acbc'] } }
})(ProjectList);

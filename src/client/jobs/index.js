import React from 'react';
import { graphql } from 'react-apollo';

import jobsQuery from './jobsQuery.gql';
import JobList from './JobList';
import JobForm from './JobForm';

const JobIndex = ({ data }) => (
  <div>
    <JobForm />
    { data.loading ? 'Loading...' : <JobList jobs={data.jobs}/> }
  </div>
);

export default graphql(jobsQuery)(JobIndex);

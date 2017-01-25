import React from 'react';
import { graphql } from 'react-apollo';

import query from '../../jobs/jobsQuery.gql';

import Section from '../Section';
import JobListItem from './JobListItem';

const JobList = ({ data }) => data.loading ? <div>"Loading..."</div> : (
  <Section title="Experience">
    { data.jobs.map(job => <JobListItem key={job.id} job={job}/>)}
  </Section>
);

export default graphql(query)(JobList);

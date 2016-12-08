import React from 'react';
import { graphql } from 'react-apollo';

import JobList from '../jobs/JobList';
import jobsQuery from '../jobs/jobsQuery.gql';

import styles from './styles.css';

const JobSection = ({ data }) => (
  <div className={`${styles.section} ${styles.jobs}`}>
    <h1 className={styles.sectionHeader}>Work Experience</h1>
    { data.loading ? 'Loading...' : <JobList jobs={data.jobs} /> }
  </div>
);

export default graphql(jobsQuery)(JobSection);

import React from 'react';
import { graphql } from 'react-apollo';

import ProjectList from '../projects/ProjectList.js';
import projectsQuery from '../projects/projectsQuery.gql';

import styles from './styles.css';

const ProjectSection = ({ data }) => (
  <div className={`${styles.section} ${styles.projects}`}>
    <h1 className={styles.sectionHeader}>Portfolio</h1>
    { data.loading ? 'Loading...' : <ProjectList projects={data.projects} /> }
  </div>
);

export default graphql(projectsQuery)(ProjectSection);

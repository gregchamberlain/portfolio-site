import React from 'react';
import { graphql } from 'react-apollo';

import ProjectList from '../projects/ProjectList.js';
import projectsQuery from '../projects/projectsQuery.gql';

import styles from './styles.css';

const ProjectSection = ({ data }) => (
  <div className={`${styles.section} ${styles.projects}`}>
    <h1 className={styles.sectionHeader}>Portfolio</h1>
    { data.loading ? 'Loading...' : <ProjectList projects={data.projects} readOnly /> }
  </div>
);

export default graphql(projectsQuery, {
  options: { variables: { ids: ["584107bfef442d27fc77b0a5", "584214b14a19f110f154acbc", "584220eb50d408246fa673e2", "5848fb106652c06ba7174162", "5848d550e6c97c0011d6cd84", "584225d650d408246fa673e3", "5848c772efc3ff3d90a9e082", "584900fa6652c06ba7174163"] }}
})(ProjectSection);

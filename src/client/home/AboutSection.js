import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles.css';

const AboutSection = ({ data }) => (
  <div className={`${styles.section} ${styles.about}`}>
    <h1 className={styles.sectionHeader}>About</h1>
    { data.loading ? 'Loading...' : <p style={{textAlign: 'center', width: '70%', margin: '0 auto'}}>{data.about}</p> }
  </div>
);

const query = gql`query About {
  about
}`;

export default graphql(query)(AboutSection);

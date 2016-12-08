import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import styles from './styles.css';

const ContactSection = ({ data }) => (
  <div className={`${styles.section} ${styles.contact}`}>
    <h1 className={styles.sectionHeader}>Contact</h1>
    { data.loading ? 'Loading...' : (
      <div>
        <div className={styles.name}>{data.name}</div>
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>
    )}
  </div>
);

const query = gql`query Contact {
  name
  email
  phone
}`;

export default graphql(query)(ContactSection);

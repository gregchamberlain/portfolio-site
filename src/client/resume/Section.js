import React from 'react';

import styles from './styles.css';

const Section = ({ title, children }) => (
  <div>
    <div className={styles.sectionHeader}>{title}</div>
    {children}
  </div>
);

export default Section;

import React from 'react';

import styles from './styles.css';

const JobListItem = ({ job }) => (
  <div style={{marginTop: 5}}>
    <div className="flex bold">
      <div>{job.companyName}</div>
      <span className="spacer" />
      <div>{job.duration}</div>
    </div>
    <div className="flex">
      <div>{job.position}</div>
      <span className="spacer" />
      <div>{job.location}</div>
    </div>
    <ul className={styles.highlights}>
      { job.highlights.map((highlight, idx) => (
        <li key={`${job.id}-${idx}`}>{highlight}</li>
      ))}
    </ul>
  </div>
);

export default JobListItem;

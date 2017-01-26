import React from 'react';

import styles from '../styles.css';

const ProjectListItem = ({ project }) => (
  <div>
    <div className="flex bold">
      <div>{project.name}</div>
      <span className="spacer" />
      { project.liveUrl && <a href={project.liveUrl} target="_blank">Live</a> }
      { project.liveUrl && <div>&nbsp;●&nbsp;</div> }
      { project.githubUrl && <a href={project.githubUrl} target="_blank">Github</a> }
    </div>
    <div>{project.brief}</div>
    <ul className={styles.highlights}>
    { project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
    </ul>
  </div>
);

export default ProjectListItem;

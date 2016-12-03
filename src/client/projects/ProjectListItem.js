import React from 'react';

const ProjectListItem = ({ project }) => (
  <div>
    <h4>{project.name}</h4>
    <p>{project.description}</p>
    { project.githubUrl ? <a href={project.githubUrl} target="_blank">Github</a> : null }
    { project.liveUrl ? <a href={project.liveUrl} target="_blank">Live</a> : null }
    <div>Skills: {project.skillsUsed.join(', ')}</div>
  </div>
);

export default ProjectListItem;

import React from 'react';

import ProjectListItem from './ProjectListItem';

const ProjectList = ({ projects }) => (
  <div>
    {projects.map(project => (
      <ProjectListItem key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectList;

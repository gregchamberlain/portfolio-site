import React from 'react';

import ProjectListItem from './ProjectListItem';

const ProjectList = ({ projects, readOnly }) => (
  <div>
    {projects.map(project => (
      <ProjectListItem key={project.id} project={project} readOnly={readOnly} />
    ))}
  </div>
);

export default ProjectList;

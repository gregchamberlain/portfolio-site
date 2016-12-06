import React, { Component } from 'react';

import ProjectForm from './ProjectForm';

class ProjectListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  setEditing = bool => () => {
    this.setState({ isEditing: bool });
  }

  render() {
    const { project } = this.props;

    if (this.state.isEditing) return <ProjectForm project={project} onUpdate={this.setEditing(false)} />;

    return (
      <div>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        { project.githubUrl ? <a href={project.githubUrl} target="_blank">Github</a> : null }
        { project.liveUrl ? <a href={project.liveUrl} target="_blank">Live</a> : null }
        <div>Skills: {project.skillsUsed.join(', ')}</div>
        <button onClick={this.setEditing(true)}>Edit</button>
      </div>
    );
  }
}

export default ProjectListItem;

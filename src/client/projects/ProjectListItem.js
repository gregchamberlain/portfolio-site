import React, { Component } from 'react';
import Github from 'react-icons/lib/go/mark-github';
import Eye from 'react-icons/lib/go/device-desktop';

import styles from './styles.css';
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
      <div className={styles.container}>
        { project.image ? <img src={project.image} className={styles.image}/> : null }
        <div className={styles.info}>
          <div className={styles.name}>
            {project.name}
            <div className="spacer" />
            { project.githubUrl ? <a href={project.githubUrl} target="_blank" className={styles.link} title="Github"><Github /></a> : null }
            { project.liveUrl ? <a href={project.liveUrl} target="_blank" className={styles.link} title="Live Link"><Eye /></a> : null }
          </div>
          <p>{project.description}</p>
          <div>Skills: {project.skillsUsed.join(', ')}</div>
          <button onClick={this.setEditing(true)}>Edit</button>
        </div>
      </div>
    );
  }
}

export default ProjectListItem;

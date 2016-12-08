import React, { Component } from 'react';

import JobForm from './JobForm';
import styles from './styles.css';

class JobListItem extends Component {
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

    const { job } = this.props;

    if (this.state.isEditing) return <JobForm job={job} onUpdate={this.setEditing(false)}/>;

    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.company}>{job.companyName}</div>
          <div className="spacer" />
          <div>{job.duration}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.position}>{job.position}</div>
          <div className="spacer" />
          <div>{job.location}</div>
        </div>
        <ul>
          { job.highlights.map((highlight, idx) => (
            <li key={`${job.id}-${idx}`}>{highlight}</li>
          ))}
        </ul>
        { this.props.readOnly ? null : <button onClick={this.setEditing(true)}>Edit</button> }
      </div>
    );
  }
}

export default JobListItem;

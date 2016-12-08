import React, { Component } from 'react';

import JobForm from './JobForm';

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
      <div>
        <h3>{job.companyName}</h3>
        <h4>{job.position}</h4>
        <p>{job.duration}</p>
        <p>{job.location}</p>
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

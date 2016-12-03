import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'immutability-helper';

const blankProject = {
  name: '',
  description: '',
  githubUrl: '',
  liveUrl: '',
  skillsUsed: []
};

class ProjectForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: blankProject
    };
  }

  submit = e => {
    e.preventDefault();
    this.props.create(this.state.project).then(({ data }) => {
      this.setState({ project: blankProject });
    }).catch(err => {
      console.error(err);
    });
  }

  updateProject = name => e => {
    this.setState(update(this.state, {
      project: { [name]: { $set: e.target.value} }
    }));
  }

  addSkill = () => {
    this.setState(update(this.state, {
      project: { skillsUsed: { $push: [''] }}
    }));
  }

  updateSkill = idx => e => {
    this.setState(update(this.state, {
      project: { skillsUsed: { [idx]: { $set: e.target.value } } }
    }));
  }

  removeSkill = idx => () => {
    this.setState(update(this.state, {
      projects: { skillsUsed: { $splice: [[idx, 1] ] } }
    }));
  }

  render() {
    const { name, description, githubUrl, liveUrl, skillsUsed } = this.state.project;
    return (
      <div>
        <div>
          <label>Name</label>
          <input type="text" onChange={this.updateProject('name')} value={name} />
        </div>
        <div>
          <label>Description</label>
          <textarea onChange={this.updateProject('description')} value={description} />
        </div>
        <div>
          <label>Github URL</label>
          <input type="text" onChange={this.updateProject('githubUrl')} value={githubUrl} />
        </div>
        <div>
          <label>Live URL</label>
          <input type="text" onChange={this.updateProject('liveUrl')} value={liveUrl} />
        </div>
        <div>
          <label>Skills Used</label>
          {skillsUsed.map((skill, idx) => (
            <div key={`skill-${idx}`}>
              <input type="text" onChange={this.updateSkill(idx)} value={skill} />
              <button onClick={this.removeSkill(idx)}>X</button>
            </div>
          ))}
          <button onClick={this.addSkill}>Add Skill</button>
        </div>
        <button onClick={this.submit}>Save</button>
      </div>
    );
  }
}

const createProjectMutation = gql`mutation CreateProject($project: ProjectInput!) {
  createProject(project: $project) {
    id
    name
    description
    githubUrl
    liveUrl
    skillsUsed
  }
}`;

export default graphql(createProjectMutation, {
  props: ({ mutate }) => ({
    create: (project) => mutate({
      variables: { project },
      updateQueries: {
        Projects(prev, { mutationResult }) {
          const newProject = mutationResult.data.createProject;
          return update(prev, {
            projects: {
              $push: [newProject]
            }
          });
        }
      }
    })
  })
})(ProjectForm);

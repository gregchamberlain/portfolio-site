import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'immutability-helper';
import Chips from 'react-chips';
import UploadModal from 'react-s3-upload-modal';

import styles from './styles.css';
import createProjectMutation from './createProjectMutation.gql';
import updateProjectMutation from './updateProjectMutation.gql';

const blankProject = {
  name: '',
  description: '',
  githubUrl: '',
  liveUrl: '',
  npmName: '',
  skillsUsed: [],
  brief: '',
  highlights: [],
  image: null
};

class ProjectForm extends Component {

  constructor(props) {
    super(props);
    let project;
    if (props.project) {
      project = Object.assign({}, blankProject, props.project);
      delete project.__typename;
      delete project.monthDownloads;
    } else {
      project = blankProject;
    }
    this.state = {
      project: project,
      isModalOpen: false
    };
  }

  componentWillReceiveProps(props) {
    if (props.project && !this.props.project) {
      const project = Object.assign({}, blankProject, props.project);
      delete project.__typename;
      this.setState({ project });
    }
  }

  submit = e => {
    if (this.props.project) {
      this.props.update(this.state.project).then(({ data }) => {
        this.props.onUpdate();
      }).catch(err => {
        console.error(err);
      });
    } else {
      this.props.create(this.state.project).then(({ data }) => {
        this.setState({ project: blankProject });
      }).catch(err => {
        console.error(err);
      });
    }
  }

  updateProject = name => e => {
    this.setState(update(this.state, {
      project: { [name]: { $set: e.target.value} }
    }));
  }

  updateSkills = value => {
    this.setState(update(this.state, {
      project: { skillsUsed: { $set: value } }
    }));
  }

  updateHighlight = idx => e => {
    this.setState(update(this.state, {
      project: { highlights: { [idx]: { $set: e.target.value } } }
    }));
  }

  addHighlight = () => {
    this.setState(update(this.state, {
      project: { highlights: { $push: [''] } }
    }));
  }

  removeHighlight = idx => () => {
    this.setState(update(this.state, {
      project: { highlights: { $splice: [[idx, 1]] } }
    }));
  }

  setModal = bool => e => {
    this.setState({ isModalOpen: bool });
  }

  setImage = urls => {
    this.setState(update(this.state, {
      project: { image: { $set: urls[0 ] } },
      isModalOpen: { $set: false }
    }), () => console.log(this.state));
  }

  render() {
    const { name, description, githubUrl, liveUrl, npmName, brief, highlights, skillsUsed, image } = this.state.project;

    return (
      <div className={styles.container}>
        <div>
          <img src={image} alt="Image" onClick={this.setModal(true)} className={styles.image}/>
          <UploadModal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.setModal(false)}
            getSignedUrls={this.props.getSignedUrls}
            onComplete={this.setImage}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>
            <div className="spacer">
              <label>Name</label>
              <input className={styles.input} type="text" onChange={this.updateProject('name')} value={name} />
            </div>
            <div>
              <label>Github URL</label>
              <input className={styles.input} type="text" onChange={this.updateProject('githubUrl')} value={githubUrl || ''} />
            </div>
            <div>
              <label>Live URL</label>
              <input className={styles.input} type="text" onChange={this.updateProject('liveUrl')} value={liveUrl || ''} />
            </div>
            <div>
              <label>NPM Name</label>
              <input className={styles.input} type="text" onChange={this.updateProject('npmName')} value={npmName || ''} />
            </div>
          </div>
          <div>
            <label>Description</label>
            <textarea className={styles.input} onChange={this.updateProject('description')} value={description || ''} />
          </div>
          <div>
            <label>Brief</label>
            <textarea className={styles.input} onChange={this.updateProject('brief')} value={brief || ''} />
          </div>
          <div>
            <label>highlights</label>
            { highlights.map((highlight, idx) => (
              <div key={`highlight-${idx}`}>
                <input className={styles.input} type="text" value={highlight} onChange={this.updateHighlight(idx)}/>
                <button onClick={this.removeHighlight(idx)}>X</button>
              </div>
            ))}
            <button onClick={this.addHighlight}>Add</button>
          </div>
          <div>
            <label>Skills Used</label>
            <Chips
              value={skillsUsed}
              onChange={this.updateSkills}
              fromSuggestionsOnly={false}
            />
          </div>
          <button onClick={this.props.onUpdate}>Cancel</button>
          <button onClick={this.submit}>Save</button>
        </div>
      </div>
    );
  }
}

const getSignedUrls = gql`mutation GetSignedUrls($files: [FileInput]!) {
  getSignedUrls(files: $files)
}`;

export default compose(
  graphql(createProjectMutation, {
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
  }),
  graphql(updateProjectMutation, {
    props: ({ mutate }) => ({
      update: (project) => mutate({
        variables: { project }
      })
    })
  }),
  graphql(getSignedUrls, {
    props: ({ mutate}) => ({
      getSignedUrls: (files) => mutate({
        variables: { files }
      }).then(({ data }) => data.getSignedUrls)
    })
  })
)(ProjectForm);

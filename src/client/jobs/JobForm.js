import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import update from 'immutability-helper';

import createJobMutation from './createJobMutation.gql';
import updateJobMutation from './updateJobMutation.gql';

const emptyJob = {
  companyName: '',
  position: '',
  duration: '',
  location: '',
  highlights: []
};

class JobForm extends Component {

  constructor(props) {
    super(props);
    let job;
    if (props.job) {
      job = Object.assign(props.job);
      delete job.__typename;
    } else {
      job = emptyJob;
    }
    this.state = {
      job
    };
  }

  componentWillReceiveProps(props) {
    if (props.job) {
      const job = Object.assign(props.job);
      delete job.__typename;
      this.setState({ job });
    }
  }

  update = name => e => {
    this.setState(update(this.state, {
      job: { [name]: { $set: e.target.value } }
    }));
  }

  updateHighlight = idx => e => {
    this.setState(update(this.state, {
      job: { highlights: { [idx]: { $set: e.target.value } } }
    }));
  }

  addHighlight = () => {
    this.setState(update(this.state, {
      job: { highlights: { $push: [''] } }
    }));
  }

  removeHighlight = idx => () => {
    this.setState(update(this.state, {
      job: { highlights: { $splice: [[idx, 1]] } }
    }));
  }

  submit = () => {
    if (this.props.job) {
      console.log(this.state.job);
      this.props.update(this.state.job).then(({ data }) => {
        console.log(data);
        this.props.onUpdate();
      }).catch(err => {
        console.error(err);
      });
    } else {
      this.props.create(this.state.job).then(({ data }) => {
        this.setState({ job: emptyJob });
      }).catch(err => {
        console.error(err);
      });
    }
  }

  render() {

    const { companyName, position, duration, location, highlights } = this.state.job;

    return (
      <div>
        <div>
          <label>Company Name</label>
          <input type="text" onChange={this.update('companyName')} value={companyName} />
        </div>
        <div>
          <label>Posistion</label>
          <input type="text" onChange={this.update('position')} value={position} />
        </div>
        <div>
          <label>Duration</label>
          <input type="text" onChange={this.update('duration')} value={duration} />
        </div>
        <div>
          <label>Location</label>
          <input type="text" onChange={this.update('location')} value={location} />
        </div>
        <div>
          <label>highlights</label>
          { highlights.map((highlight, idx) => (
            <div key={`highlight-${idx}`}>
              <input type="text" value={highlight} onChange={this.updateHighlight(idx)}/>
              <button onClick={this.removeHighlight(idx)}>X</button>
            </div>
          ))}
          <button onClick={this.addHighlight}>Add</button>
        </div>
        <button onClick={this.submit}>Save</button>
      </div>
    );
  }
}

export default compose(
  graphql(createJobMutation, {
    props: ({ mutate }) => ({
      create: (job) => mutate({
        variables: { job },
        updateQueries: {
          Jobs(prev, { mutationResult }) {
            const newJob = mutationResult.data.createJob;
            return update(prev, {
              jobs: { $push: [newJob] }
            });
          }
        }
      })
    })
  }),
  graphql(updateJobMutation, {
    props: ({ mutate }) => ({
      update: (job) => mutate({
        variables: { job }
      })
    })
  })
)(JobForm);
// export default graphql(createJobMutation, {
//   props: ({ mutate }) => ({
//     create: (job) => mutate({
//       variables: { job },
//       updateQueries: {
//         Jobs(prev, { mutationResult }) {
//           const newJob = mutationResult.data.createJob;
//           return update(prev, {
//             jobs: { $push: [newJob] }
//           });
//         }
//       }
//     })
//   })
// })(JobForm);

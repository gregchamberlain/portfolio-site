import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class RocketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lifespan: '',
      mass: 0
    };
  }

  submit = e => {
    e.preventDefault();
    this.props.mutate({ variables: {
      name: this.state.name,
      lifespan: this.state.lifespan,
      mass: Number(this.state.mass)
    }}).then(({ data }) => {
      console.log(data);
    }).catch(err => {
      console.error(err);
    });
  }

  update = name => e => {
    this.setState({[name]: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <h3>Create New Rocket</h3>
        <div>
          <label>Name</label>
          <input type="text" onChange={this.update('name')} value={this.state.name}/>
        </div>
        <div>
          <label>Lifespan</label>
          <input type="text" onChange={this.update('lifespan')} value={this.state.lifespan}/>
        </div>
        <div>
          <label>Mass</label>
          <input type="number" onChange={this.update('mass')} value={this.state.mass}/>
        </div>
        <button>Create</button>
      </form>
    );
  }
}

const mutation = gql`mutation CreateRocket($name: String!, $lifespan: String!, $mass: Float!){
  createRocket(name: $name, lifespan: $lifespan, mass: $mass) {
    id
    name
    lifespan
    mass
  }
}`;

export default graphql(mutation)(RocketForm);

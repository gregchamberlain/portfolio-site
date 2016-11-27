import React, { Component } from 'react';

import RocketList from './rockets/RocketList';
import RocketForm from './rockets/RocketForm';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to React Apollo Fullstack Skeleton!</h1>
        <RocketForm />
        <RocketList />
      </div>
    );
  }
}

export default App;

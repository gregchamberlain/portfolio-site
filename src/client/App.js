import React, { Component } from 'react';

import PersonList from './PersonList';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to React Apollo Fullstack Skeleton!</h1>
        <PersonList />
      </div>
    );
  }
}

export default App;

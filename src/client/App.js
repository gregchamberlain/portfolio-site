import React, { Component } from 'react';
import { HashRouter, Match, Link } from 'react-router';

import Home from './home';
import ProjectIndex from './projects';
import JobIndex from './jobs';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          {/* <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link> */}
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/projects" component={ProjectIndex} />
          <Match exactly pattern="/experience" component={JobIndex} />
        </div>
      </HashRouter>
    );
  }
}

export default App;

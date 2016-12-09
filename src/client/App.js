import React, { Component } from 'react';
import { HashRouter, Match, Link } from 'react-router';

import Home from './home';
import ProjectIndex from './projects';
import JobIndex from './jobs';
import Resume from './resume';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          {/* <Link to="/">Homodalme</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link> */}
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/projects" component={ProjectIndex} />
          <Match exactly pattern="/experience" component={JobIndex} />
          <Match exactly pattern="/resume" component={Resume} />
        </div>
      </HashRouter>
    );
  }
}

export default App;

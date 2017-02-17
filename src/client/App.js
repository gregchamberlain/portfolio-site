import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

console.log(HashRouter, Route);

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
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectIndex} />
          <Route exact path="/experience" component={JobIndex} />
          <Route exact path="/resume" component={Resume} />
        </div>
      </HashRouter>
    );
  }
}

export default App;

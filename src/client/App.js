import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './home';
import ProjectIndex from './projects';
import JobIndex from './jobs';
import Resume from './resume';

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            { process.env.NODE_ENV === 'production' ? null : <Route exact path="/projects" component={ProjectIndex} /> }
            { process.env.NODE_ENV === 'production' ? null : <Route exact path="/experience" component={JobIndex} /> }
            <Route exact path="/resume" component={Resume} />
            <Route component={() => <h1>Sorry this page does not exist! :( <Link to="/">Go Home</Link></h1>}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

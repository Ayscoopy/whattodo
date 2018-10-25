import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../src/components/layouts/Navbar';
import Home from './components/layouts/Home';
import Dashboard from './components/Dashboard/Dashboard';
import SignUp from '../src/components/auth/SignUp'
import SignIn from '../src/components/auth/SignIn'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

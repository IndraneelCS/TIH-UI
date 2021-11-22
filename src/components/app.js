import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Videos from './Videos';
import Gaming from './Gaming';
import GameStrategy from './GameStrategy';
import Preference from './Preference';

// create component
export default class App extends Component {
  render() {
    return (
      <Switch>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/home" render={() => (<Dashboard />)} />
              <Route exact path="/videos" render={() => (<Videos />)} />
              <Route exact path="/gaming" render={() => (<Gaming />)} />
              <Route exact path="/gameStrategy" render={() => (<GameStrategy />)} />
              <Route exact path="/preference" render={() => (<Preference />)} />
        </Switch>
    );
  }
}

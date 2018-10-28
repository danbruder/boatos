import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import CowList from './CowList';
import UserLogIn from './UserLogIn';

export default () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cows" component={CowList} />
        <Route exact path="/user/login" component={UserLogIn} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

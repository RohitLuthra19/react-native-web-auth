import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { history } from './history';

export const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  logout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
};

const SecretRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthService.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  )} />
);

{/* <Redirect to='/' /> */ }

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <SecretRoute path="/dashboard" component={Dashboard} />
          <Route render={() => (<div> Sorry, this page does not exist. </div>)} />
        </Switch>
      </Router>
    );
  }
}

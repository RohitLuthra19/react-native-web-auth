import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { AsyncStorage } from "react-native"
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { history } from './history';
import AuthRoute from './AuthRoute';
import UnauthRoute from './UnauthRoute';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          {/* <Route exact path="/" component={Login} />
          <SecretRoute path="/dashboard" component={Dashboard} />
          <Route render={() => (<div> Sorry, this page does not exist. </div>)} /> */}
          <Route exact path="/" render={() => (<div> Welcome to admin </div>)} />
          <AuthRoute exact path="/dashboard" component={Dashboard} redirectTo="/login" authenticated={this.props.authenticated} />
          <UnauthRoute exact path="/login" component={Login} redirectTo="/" authenticated={this.props.authenticated} />
        </Switch>
      </Router>
    );
  }
}

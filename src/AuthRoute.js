/*
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

class AuthRoute extends Component {
  render() {
    const { component: Component, authenticated, redirectTo, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => (
          authenticated ? (
            <Component {...props} />
          ) : (
              <Redirect to={{
                pathname: redirectTo,
                state: { from: props.location }
              }}
              />
            )
        )}
      />
    )
  }
}

export default AuthenticatedRoute; */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ component: Component, authenticated, redirectTo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        authenticated ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: redirectTo,
              state: { from: props.location }
            }}
            />
          )
      )}
    />
  )
}

AuthRoute.propTypes = {
  authenticated: PropTypes.bool,
  redirectTo: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
}

AuthRoute.defaultProps = {
  authenticated: false,
}

export default AuthRoute
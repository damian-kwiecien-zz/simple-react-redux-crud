import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './shared/containers/private-route'
import Login from './auth-module/components/login'
import Home from './root-module/components/home'

const RootRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Home} />
        <PrivateRoute path="/login" component={Login} />
      </div>
    </Router>
  </Provider>
)

RootRouter.propTypes = {
  store: PropTypes.object.isRequired
}

export default RootRouter
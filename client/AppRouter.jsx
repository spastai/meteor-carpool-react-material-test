import React from 'react'
import Layout from './Layout'
import { Router, IndexRoute, Route, browserHistory, IndexRedirect } from 'react-router'
import pickView from './pickView'

import UserSettingsScreen from './containers-mobile/UserSettingsScreen'
import TripFormScreen from './containers-mobile/TripFormScreen'
import HomeView from './containers-desktop/HomeView'
import ExamplesScreen from './containers-mobile/ExamplesScreen'
import ExamplesView from './containers-desktop/ExamplesView'

export default class AppRouter extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route path="/" component={pickView(HomeView, TripFormScreen)} />
          <Route path="/settings" component={pickView(HomeView, UserSettingsScreen)} />
          <Route path="/examples" component={pickView(ExamplesView, ExamplesScreen)} />
        </Route>
      </Router>
    )
  }
}

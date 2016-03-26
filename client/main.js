import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import store from './store'
import AppRouter from './AppRouter'

setTimeout(() => {
  injectTapEventPlugin()
  ReactDOM.render((
    <Provider store={store}>
      <AppRouter />
    </Provider>
  ), document.getElementById('react-root'))
})

/* TODO
  Padaryt Root componenta kuris nusprestu ar mobile ar desktop
  Padaryt MobileLayout ir DesktopLayout
  Padaryt MobileNavigation su hamburger
  Padaryt DesktopNavigation su pora knopkiu virsuj




*/

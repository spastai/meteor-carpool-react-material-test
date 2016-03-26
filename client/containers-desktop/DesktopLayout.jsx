import React from 'react'
import DesktopNavigation from './DesktopNavigation'
import { Paper } from 'material-ui'

export default class DesktopLayout extends React.Component {
  render () {
    console.log('Ne2 layout')
    return (
      <div>
        <DesktopNavigation />
        <Paper style={{
          width: 1320,
          margin: '0px auto',
          marginTop: 25,
          padding: 15,
          minHeight: this.props.height - 200,
        }}>
          {this.props.children}
        </Paper>
      </div>
    )
  }
}

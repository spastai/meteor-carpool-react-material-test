import React from 'react'
import MobileLayout from './containers-mobile/MobileLayout'
import DesktopLayout from './containers-desktop/DesktopLayout'

export default class AppRoot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }

    window.addEventListener('resize', () => {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    })
  }

  render () {
    console.log('New layout')
    if (this.state.windowWidth > 900) {
      return (
        <DesktopLayout width={this.state.windowWidth} height={this.state.windowHeight}>
          {React.Children.map(this.props.children, (element) =>
            React.cloneElement(element, {width: 1300, height: this.state.windowHeight}))}
        </DesktopLayout>
      )
    } else {
      return (
        <MobileLayout width={this.state.windowWidth} height={this.state.windowHeight}>
          {React.Children.map(this.props.children, (element) =>
            React.cloneElement(element, {width: this.state.windowWidth, height: this.state.windowHeight}))}
        </MobileLayout>
      )
    }
  }
}

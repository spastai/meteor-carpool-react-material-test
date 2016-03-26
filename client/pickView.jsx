import React from 'react'

export default function pickView(DesktopView, MobileView) {
  return class ViewPicker extends React.Component {
    render () {
      return this.props.width > 600 ? (
        <DesktopView {...this.props} />
      ) : (
        <MobileView {...this.props} />
      )
    }
  }
}

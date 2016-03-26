import React from 'react'
import Examples from '../components/Examples'

export default class ExamplesView extends React.Component {
  render () {
    return (
      <div>
        <div style={{textAlign: 'center'}}>Desktop examples rendered in 2 columns</div>
        <Examples numColumns={2} width={this.props.width} />
      </div>
    )
  }
}

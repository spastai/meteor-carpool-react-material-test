import React from 'react'
import Examples from '../components/Examples'

export default class ExamplesScreen extends React.Component {
  render () {
    return (
      <div>
        <div>Mobile examples in 1 column</div>
        <Examples numColumns={1} width={this.props.width} />
      </div>
    )
  }
}

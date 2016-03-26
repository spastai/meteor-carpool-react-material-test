import React from 'react'
import TripForm from '../components/TripForm'
import { connect } from 'react-redux'

class TripFormScreen extends React.Component {
  render() {
    console.log('Here?')
    return (
      <div>
        <div style={{textAlign: 'center', padding: 10, marginTop: 10}}>{
          this.props.language == 'en'
          ? 'Mobile trip form'
          : 'Mobili kelionės forma'
        }</div>
        <TripForm language={this.props.language} />
      </div>
    )
  }
}

export default connect((state) => state)(TripFormScreen)

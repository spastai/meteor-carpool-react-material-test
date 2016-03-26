import React from 'react'
import UserSettings from '../components/UserSettings'
import { connect } from 'react-redux'

class UserSettingsScreen extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div style={{textAlign: 'center', padding: 10, marginTop: 10}}>
          {this.props.language == 'en'
          ? 'Mobile User Settings'
          : 'Mobilios vartotojo parinktys'}
        </div>
        <UserSettings width={this.props.width} language={this.props.language} />
      </div>
    )
  }
}

export default connect((state) => state)(UserSettingsScreen)

import React from 'react'
import TripForm from '../components/TripForm'
import UserSettings from '../components/UserSettings'
import { connect } from 'react-redux'

class HomeView extends React.Component {
  render () {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{textAlign: 'center', margin: 10, marginBottom: 30}}>
          {this.props.language == 'lt'
          ? 'Desktopo variante tripo form ir settings vienam puslapyje, nes turim daug vietos'
          : 'In desktop version trip form and settings is in one page because we can'}
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <div style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}>
            <TripForm width={this.props.width / 2.5} language={this.props.language} />
          </div>
          <div style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}>
            <UserSettings width={this.props.width / 2.5} language={this.props.language} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => state)(HomeView)

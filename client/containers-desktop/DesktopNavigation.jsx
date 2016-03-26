import React from 'react'
import { FlatButton, Paper, DropDownMenu, MenuItem } from 'material-ui'
import { connect } from 'react-redux'
import { changeLanguage } from '../actions'

const buttonStyles = {
  borderBottom: '1px solid #00bcd4',
  borderTop: '1px solid #00bcd4',
  borderRadius: 10,
  margin: 10,
  marginTop: 12,
}

class DesktopNavigation extends React.Component {
  render () {
    console.log('Ello')
    console.log(this.context.router.isActive('/'))
    return (
      <Paper>
        <div style={{
          width: '100%',
          height: 60,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <h1 style={{padding: 15}}>Carpool</h1>
          <FlatButton style={{
            ...buttonStyles,
          }} label="Home" onClick={() => {this.context.router.push('/')}} />
          <FlatButton style={buttonStyles} label="Examples" onClick={() => {this.context.router.push('/examples')}} />
          <div style={{marginLeft: 'auto', marginRight: 2}}>
            <DropDownMenu value={this.props.language} onChange={(e, ind, value) => this.props.changeLanguage(value)}>
              <MenuItem value="en" primaryText="EN"/>
              <MenuItem value="lt" primaryText="LT"/>
            </DropDownMenu>
          </div>
        </div>
      </Paper>
    )
  }
}

DesktopNavigation.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

export default connect((state) => state, {changeLanguage})(DesktopNavigation)

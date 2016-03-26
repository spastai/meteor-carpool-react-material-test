import React from 'react'
import MobileNavigation from './MobileNavigation'
import { AppBar } from 'material-ui'
import IconButton from 'material-ui/lib/icon-button';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import RaisedButton from 'material-ui/lib/raised-button';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { connect } from 'react-redux'
import { changeLanguage } from '../actions'

class MobileLayout extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      navOpen: false,
    }
  }

  openNavigation () {
    this.setState({
      navOpen: true,
    })
  }

  handleChangeRequestLeftNav (isOpen) {
    this.setState({
      navOpen: isOpen,
    })
  }

  render () {
    return (
      <div>
        <AppBar
          title="Carpool"
          iconElementLeft={
            <div >
              <IconButton onClick={this.openNavigation.bind(this)}><MenuIcon color="#fff"/></IconButton>
            </div>
          }
          iconElementRight={
            <DropDownMenu labelStyle={{color: 'white'}} value={this.props.language} onChange={(e, ind, value) => this.props.changeLanguage(value)}>
              <MenuItem value="en" primaryText="EN"/>
              <MenuItem value="lt" primaryText="LT"/>
            </DropDownMenu>
          }
        />

        <MobileNavigation open={this.state.navOpen} onRequestChangeLeftNav={this.handleChangeRequestLeftNav.bind(this)} />
        {this.props.children}
      </div>
    )
  }
}

export default connect((state) => state, {changeLanguage})(MobileLayout)

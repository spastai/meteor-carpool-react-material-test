import React from 'react'

import { TextField, DatePicker, TimePicker, RaisedButton, Snackbar } from 'material-ui'

const labels = {
    'submit_passenger': {
      'lt': 'Važiuoju',
      'en': 'Passenger',
    },
    'submit_driver': {
      'lt': 'Vežu',
      'en': 'Driver',
    },
    'hint_from': {
      'lt': 'Iš',
      'en': 'From',
    },
    'hint_to': {
      'lt': 'Į',
      'en': 'To',
    },
    'hint_date': {
      'lt': 'Data',
      'en': 'Date',
    },
    'hint_time': {
      'lt': 'Laikas',
      'en': 'Time',
    },
    'trip_canceled': {
      'lt': 'Kelionė atšaukta',
      'en': 'Trip canceled',
    },
    'trip_created': {
      'lt': 'Kelionė sėkmingai sukurta',
      'en': 'Trip has been created successfuly',
    },
    'cancel_trip': {
      'lt': 'Atšaukti',
      'en': 'Undo',
    }
  }

export default class TripForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      snackbarOpen: false,
    }
  }

  submitForm () {
    this.setState({
      snackbarOpen: true,
    })
  }

  handleRequestClose () {
    this.setState({
      snackbarOpen: false,
    })
  }

  handleActionTouchTap () {
    this.handleRequestClose()
    setTimeout(() => {
      alert(labels['trip_canceled'][this.props.language])
    })
  }

  render () {
    const lang = this.props.language
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: this.props.width, padding: 5}}>
        <TextField floatingLabelText={labels['hint_from'][lang]} />
        <TextField floatingLabelText={labels['hint_to'][lang]} />
        <DatePicker hintText={labels['hint_date'][lang]} style={{marginTop: 20}} />
        <TimePicker hintText={labels['hint_to'][lang]} style={{marginTop: 20}} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <RaisedButton label={labels['submit_driver'][lang]} primary={true} style={{width: 200}} style={{margin: 20}} onClick={this.submitForm.bind(this)} />
          <RaisedButton label={labels['submit_passenger'][lang]} primary={true} style={{width: 200}} style={{margin: 20}} onClick={this.submitForm.bind(this)} />
        </div>

        <Snackbar
          open={this.state.snackbarOpen}
          message={labels['trip_created'][lang]}
          action={labels['cancel_trip'][lang]}
          autoHideDuration={4000}
          onActionTouchTap={this.handleActionTouchTap.bind(this)}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    )
  }
}

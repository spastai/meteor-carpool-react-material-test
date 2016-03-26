import React from 'react'

export default class UserSettings extends React.Component {
  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: this.props.width, padding: 5}}>
        <div>
          {this.props.language == 'en'
          ? 'User settings would be here if we had any!'
          : 'Jei turėtume vartotojo pasirinkimus, jei būtų čia'}
        </div>
        <div style={{marginTop: 10}}>{this.props.language == 'en'
          ? 'Meanwhile please accept cute cat pic as replacement'
          : 'Pokolkas prašome priimti mielo kačiuko paveikslėlį'}</div>
        <img src="https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg" style={{width: this.props.width * 0.9, marginTop: 20}} />
      </div>
    )
  }
}

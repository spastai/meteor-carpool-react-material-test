const initialState = {
  language: 'en',
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      }
    default:
      return state
  }
}

import { createStore } from 'redux'

let store = createStore(appReducer)

export default store

import { CHANGE_MESSAGE } from '../actions/'

const initialState = {
  message: 'Hello, World',
}

const theApp = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return { ...state, message: action.message }
    default:
      return state
  }
}

export default theApp

import {
  CHANGE_CAPTION,
  ADD_UPDATE_IMAGE_URL,
  CHANGE_TEXT_COLOR,
  CHANGE_FILL_COLOR,
} from '../actions/'

const initialState = {
  caption: 'A',
  textColor: '#ff0000',
  fillColor: '#00ff00',
  imageUrls: {},
}

const theApp = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CAPTION:
      return { ...state, caption: action.caption }
    case ADD_UPDATE_IMAGE_URL:
      return {
        ...state,
        imageUrls: { ...state.imageUrls, [action.size]: action.url },
      }
    case CHANGE_TEXT_COLOR:
      return {
        ...state,
        textColor: action.color,
      }
    case CHANGE_FILL_COLOR:
      return {
        ...state,
        fillColor: action.color,
      }
    default:
      return state
  }
}

export default theApp

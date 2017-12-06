import {
  CHANGE_CAPTION,
  ADD_UPDATE_IMAGE_URL,
  CHANGE_TEXT_COLOR,
  CHANGE_FILL_COLOR,
} from '../actions/'

export const CAPTION = 'caption'
export const TEXT_COLOR = 'textColor'
export const FILL_COLOR = 'fillColor'
export const IMAGE_URLS = 'imageUrls'

const initialState = {
  [CAPTION]: 'A',
  [TEXT_COLOR]: '#ff0000',
  [FILL_COLOR]: '#00ff00',
  [IMAGE_URLS]: {},
}

const theApp = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CAPTION:
      return { ...state, [CAPTION]: action[CAPTION] }
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

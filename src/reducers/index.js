import {
  CHANGE_CAPTION,
  ADD_UPDATE_IMAGE,
  CHANGE_TEXT_COLOR,
  CHANGE_FILL_COLOR,
} from '../actions/'

export const CAPTION = 'caption'
export const TEXT_COLOR = 'textColor'
export const FILL_COLOR = 'fillColor'
export const IMAGES = 'images'

const initialState = {
  [CAPTION]: 'A',
  [TEXT_COLOR]: '#ff0000',
  [FILL_COLOR]: '#00ff00',
  [IMAGES]: {},
}

const theApp = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CAPTION:
      return { ...state, [CAPTION]: action[CAPTION] }
    case ADD_UPDATE_IMAGE:
      return {
        ...state,
        [IMAGES]: { ...state[IMAGES], [action.size]: action.data },
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

import {
  CHANGE_CAPTION,
  CHANGE_OFFSETS,
  CLEAR_IMAGES,
  ADD_UPDATE_IMAGE,
  CHANGE_TEXT_COLOR,
  CHANGE_FILL_COLOR,
  SET_DOWNLOAD_DATA,
  CHANGE_FONT_SCALE,
} from '../actions/'
import { getMessage } from '../utils'

export const CAPTION = 'caption'
export const OFFSETS = 'offsets'
export const TEXT_COLOR = 'textColor'
export const FONT_SCALE = 'fontScale'
export const FILL_COLOR = 'fillColor'
export const IMAGES = 'images'
export const DOWNLOAD_DATA = 'downloadData'

const initialState = {
  [CAPTION]: getMessage('defaultCaption'),
  [OFFSETS]: { x: 0, y: 0.0 },
  [FONT_SCALE]: 100,
  [TEXT_COLOR]: '#ff0000',
  [FILL_COLOR]: '#00ff00',
  [IMAGES]: { 16: null, 24: null, 32: null, 64: null },
  [DOWNLOAD_DATA]: null,
}

const theApp = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CAPTION:
      return { ...state, [CAPTION]: action[CAPTION] }
    case CHANGE_OFFSETS:
      return { ...state, [OFFSETS]: action[OFFSETS] }
    case CHANGE_FONT_SCALE: {
      const scale = Math.min(200, Math.max(20, state[FONT_SCALE] + action.diff))
      return { ...state, [FONT_SCALE]: scale }
    }
    case CLEAR_IMAGES:
      return {
        ...state,
        [IMAGES]: { 16: null, 24: null, 32: null, 64: null },
      }
    case ADD_UPDATE_IMAGE:
      return {
        ...state,
        [IMAGES]: { ...state[IMAGES], [action.size]: action.data },
      }
    case CHANGE_TEXT_COLOR:
      return {
        ...state,
        [TEXT_COLOR]: action.color,
      }
    case CHANGE_FILL_COLOR:
      return {
        ...state,
        [FILL_COLOR]: action.color,
      }
    case SET_DOWNLOAD_DATA:
      return {
        ...state,
        [DOWNLOAD_DATA]: action.data,
      }
    default:
      return state
  }
}

export default theApp

import { CHANGE_CAPTION, ADD_UPDATE_IMAGE_URL } from '../actions/'

const initialState = {
  caption: 'A',
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
    default:
      return state
  }
}

export default theApp

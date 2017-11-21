export const CHANGE_CAPTION = 'CHANGE_CAPTION'
export const ADD_UPDATE_IMAGE_URL = 'ADD_UPDATE_IMAGE_URL'

export const changeCaption = caption => ({ type: CHANGE_CAPTION, caption })
export const addUpdateImageUrl = (size, url) => ({
  type: ADD_UPDATE_IMAGE_URL,
  size,
  url,
})

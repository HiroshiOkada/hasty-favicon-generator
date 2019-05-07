export const CHANGE_CAPTION = 'CHANGE_CAPTION'
export const CHANGE_OFFSETS = 'CHANGE_OFFSETS'
export const CHANGE_FONT_SCALE = 'CHANGE_FONT_SCALE'
export const CLEAR_IMAGES = 'CLEAR_IMAGES'
export const ADD_UPDATE_IMAGE = 'ADD_UPDATE_IMAGE'
export const CHANGE_TEXT_COLOR = 'CHANGE_TEXT_COLOR'
export const CHANGE_FILL_COLOR = 'CHANGE_FILL_COLOR'
export const SET_DOWNLOAD_DATA = 'SET_DOWNLOAD_DATA'

export const changeCaption = caption => ({ type: CHANGE_CAPTION, caption })
export const changeOffsets = offsets => ({ type: CHANGE_OFFSETS, offsets })
export const changeFontScale = diff => ({ type: CHANGE_FONT_SCALE, diff })
export const clearImages = () => ({ type: CLEAR_IMAGES })
export const addUpdateImage = (size, data) => ({
  type: ADD_UPDATE_IMAGE,
  size,
  data,
})
export const changeTextColor = color => ({ type: CHANGE_TEXT_COLOR, color })
export const changeFillColor = color => ({ type: CHANGE_FILL_COLOR, color })
export const setDownloadData = data => ({ type: SET_DOWNLOAD_DATA, data })

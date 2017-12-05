import {
  CHANGE_CAPTION,
  ADD_UPDATE_IMAGE_URL,
  CHANGE_TEXT_COLOR,
  CHANGE_FILL_COLOR,
  changeCaption,
  addUpdateImageUrl,
  changeTextColor,
  changeFillColor,
} from './index'

describe('types', () => {
  it('shoud have correct string', () => {
    expect(CHANGE_CAPTION).toBe('CHANGE_CAPTION')
    expect(ADD_UPDATE_IMAGE_URL).toBe('ADD_UPDATE_IMAGE_URL')
    expect(CHANGE_TEXT_COLOR).toBe('CHANGE_TEXT_COLOR')
    expect(CHANGE_FILL_COLOR).toBe('CHANGE_FILL_COLOR')
  })
})

describe('action creaters', () => {
  it('shoud create correct action', () => {
    expect(changeCaption('Hi')).toEqual({ type: CHANGE_CAPTION, caption: 'Hi' })
    expect(addUpdateImageUrl(16, 'data:image/png;base64,abc')).toEqual({
      type: ADD_UPDATE_IMAGE_URL,
      size: 16,
      url: 'data:image/png;base64,abc',
    })
    expect(changeTextColor('#112233')).toEqual({
      type: CHANGE_TEXT_COLOR,
      color: '#112233',
    })
    expect(changeFillColor('#112233')).toEqual({
      type: CHANGE_FILL_COLOR,
      color: '#112233',
    })
  })
})

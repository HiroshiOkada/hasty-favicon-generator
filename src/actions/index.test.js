import {
  CHANGE_CAPTION,
  ADD_UPDATE_IMAGE_URL,
  changeCaption,
  addUpdateImageUrl,
} from './index'

describe('types', () => {
  it('shoud have correct string', () => {
    expect(CHANGE_CAPTION).toBe('CHANGE_CAPTION')
    expect(ADD_UPDATE_IMAGE_URL).toBe('ADD_UPDATE_IMAGE_URL')
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
  })
})

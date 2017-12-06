import {
  CHANGE_CAPTION,
  ADD_UPDATE_IMAGE,
  CHANGE_TEXT_COLOR,
  CHANGE_FILL_COLOR,
  changeCaption,
  addUpdateImage,
  changeTextColor,
  changeFillColor,
} from './index'

describe('types', () => {
  it('shoud have correct string', () => {
    expect(CHANGE_CAPTION).toBe('CHANGE_CAPTION')
    expect(ADD_UPDATE_IMAGE).toBe('ADD_UPDATE_IMAGE')
    expect(CHANGE_TEXT_COLOR).toBe('CHANGE_TEXT_COLOR')
    expect(CHANGE_FILL_COLOR).toBe('CHANGE_FILL_COLOR')
  })
})

describe('action creaters', () => {
  it('shoud create correct action', () => {
    expect(changeCaption('Hi')).toEqual({ type: CHANGE_CAPTION, caption: 'Hi' })
    expect(addUpdateImage(16, '0001')).toEqual({
      type: ADD_UPDATE_IMAGE,
      size: 16,
      data: '0001',
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

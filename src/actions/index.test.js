import {
  CHANGE_CAPTION,
  CHANGE_OFFSETS,
  CLEAR_IMAGES,
  ADD_UPDATE_IMAGE,
  CHANGE_TEXT_COLOR,
  CHANGE_FILL_COLOR,
  SET_DOWNLOAD_DATA,
  changeCaption,
  changeOffsets,
  clearImages,
  addUpdateImage,
  changeTextColor,
  changeFillColor,
  setDownloadData,
} from './index'

describe('types', () => {
  it('shoud have correct string', () => {
    expect(CHANGE_CAPTION).toBe('CHANGE_CAPTION')
    expect(CLEAR_IMAGES).toBe('CLEAR_IMAGES')
    expect(ADD_UPDATE_IMAGE).toBe('ADD_UPDATE_IMAGE')
    expect(CHANGE_TEXT_COLOR).toBe('CHANGE_TEXT_COLOR')
    expect(CHANGE_FILL_COLOR).toBe('CHANGE_FILL_COLOR')
    expect(SET_DOWNLOAD_DATA).toBe('SET_DOWNLOAD_DATA')
  })
})

describe('action creaters', () => {
  it('shoud create correct action', () => {
    expect(changeCaption('Hi')).toEqual({
      type: CHANGE_CAPTION,
      caption: 'Hi',
    })
    expect(changeOffsets({ x: 1, y: 2 })).toEqual({
      type: CHANGE_OFFSETS,
      offsets: { x: 1, y: 2 },
    })
    expect(clearImages()).toEqual({ type: CLEAR_IMAGES })
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
    expect(setDownloadData('ABCDEF')).toEqual({
      type: SET_DOWNLOAD_DATA,
      data: 'ABCDEF',
    })
  })
})

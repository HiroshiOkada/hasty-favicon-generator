import {
  changeCaption,
  changeOffsets,
  clearImages,
  addUpdateImage,
  changeTextColor,
  changeFillColor,
  setDownloadData,
} from '../actions'
import theApp, {
  CAPTION,
  OFFSETS,
  TEXT_COLOR,
  FILL_COLOR,
  IMAGES,
  DOWNLOAD_DATA,
} from './index'

describe('changeCaption', () => {
  it('should change caption', () => {
    expect(theApp({ [CAPTION]: 'old msg' }, changeCaption('new msg'))).toEqual({
      [CAPTION]: 'new msg',
    })
  })
})

describe('changeOffsets', () => {
  it('should change offsets', () => {
    expect(
      theApp({ [OFFSETS]: { x: 0, y: 0 } }, changeOffsets({ x: 1, y: 2 })),
    ).toEqual({
      [OFFSETS]: { x: 1, y: 2 },
    })
  })
})

describe('clearImages', () => {
  it('should clear image', () => {
    expect(
      theApp({ [IMAGES]: { 16: '111', 32: '222' } }, clearImages()),
    ).toEqual({
      [IMAGES]: { 16: null, 24: null, 32: null, 64: null },
    })
  })
})

describe('addUpdateImage', () => {
  it('should change or add image', () => {
    expect(theApp({ [IMAGES]: {} }, addUpdateImage(16, '161'))).toEqual({
      [IMAGES]: {
        16: '161',
      },
    })
    expect(
      theApp(
        {
          [IMAGES]: {
            16: '161',
          },
        },
        addUpdateImage(32, '321'),
      ),
    ).toEqual({
      [IMAGES]: {
        16: '161',
        32: '321',
      },
    })
    expect(
      theApp(
        {
          [IMAGES]: {
            16: '161',
            32: '321',
          },
        },
        addUpdateImage(16, '162'),
      ),
    ).toEqual({
      [IMAGES]: {
        16: '162',
        32: '321',
      },
    })
  })
})

describe('changeTextColor', () => {
  it('should change textColor', () => {
    expect(
      theApp({ [TEXT_COLOR]: '#112233' }, changeTextColor('#445566')),
    ).toEqual({
      [TEXT_COLOR]: '#445566',
    })
  })
})

describe('changeFillColor', () => {
  it('should change fillColor', () => {
    expect(
      theApp({ [FILL_COLOR]: '#112233' }, changeFillColor('#445566')),
    ).toEqual({
      [FILL_COLOR]: '#445566',
    })
  })
})

describe('setDownloadData', () => {
  it('should set download data', () => {
    expect(
      theApp({ [DOWNLOAD_DATA]: 'aabbcc' }, setDownloadData('ddeeff')),
    ).toEqual({
      [DOWNLOAD_DATA]: 'ddeeff',
    })
  })
})

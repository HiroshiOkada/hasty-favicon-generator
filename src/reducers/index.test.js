import {
  changeCaption,
  addUpdateImageUrl,
  changeTextColor,
  changeFillColor,
} from '../actions'
import theApp, { CAPTION, TEXT_COLOR, FILL_COLOR, IMAGE_URLS } from './index'

describe('changeCaption', () => {
  it('should change caption', () => {
    expect(theApp({ [CAPTION]: 'old msg' }, changeCaption('new msg'))).toEqual({
      [CAPTION]: 'new msg',
    })
  })
})

describe('addUpdateImageUrl', () => {
  it('should change add image url', () => {
    expect(
      theApp(
        { [IMAGE_URLS]: {} },
        addUpdateImageUrl(16, 'data:image/png;base64,abc16'),
      ),
    ).toEqual({
      [IMAGE_URLS]: {
        16: 'data:image/png;base64,abc16',
      },
    })
    expect(
      theApp(
        {
          [IMAGE_URLS]: {
            16: 'data:image/png;base64,abc16',
          },
        },
        addUpdateImageUrl(32, 'data:image/png;base64,def32'),
      ),
    ).toEqual({
      [IMAGE_URLS]: {
        16: 'data:image/png;base64,abc16',
        32: 'data:image/png;base64,def32',
      },
    })
    expect(
      theApp(
        {
          [IMAGE_URLS]: {
            16: 'data:image/png;base64,xxx16',
            32: 'data:image/png;base64,def32',
          },
        },
        addUpdateImageUrl(16, 'data:image/png;base64,xxx16'),
      ),
    ).toEqual({
      [IMAGE_URLS]: {
        16: 'data:image/png;base64,xxx16',
        32: 'data:image/png;base64,def32',
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

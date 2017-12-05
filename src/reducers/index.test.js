import theApp from './index'
import {
  changeCaption,
  addUpdateImageUrl,
  changeTextColor,
  changeFillColor,
} from '../actions'

describe('changeCaption', () => {
  it('should change caption', () => {
    expect(theApp({ caption: 'old msg' }, changeCaption('new msg'))).toEqual({
      caption: 'new msg',
    })
  })
})

describe('addUpdateImageUrl', () => {
  it('should change add image url', () => {
    expect(
      theApp(
        { imageUrls: {} },
        addUpdateImageUrl(16, 'data:image/png;base64,abc16'),
      ),
    ).toEqual({
      imageUrls: {
        16: 'data:image/png;base64,abc16',
      },
    })
    expect(
      theApp(
        {
          imageUrls: {
            16: 'data:image/png;base64,abc16',
          },
        },
        addUpdateImageUrl(32, 'data:image/png;base64,def32'),
      ),
    ).toEqual({
      imageUrls: {
        16: 'data:image/png;base64,abc16',
        32: 'data:image/png;base64,def32',
      },
    })
    expect(
      theApp(
        {
          imageUrls: {
            16: 'data:image/png;base64,xxx16',
            32: 'data:image/png;base64,def32',
          },
        },
        addUpdateImageUrl(16, 'data:image/png;base64,xxx16'),
      ),
    ).toEqual({
      imageUrls: {
        16: 'data:image/png;base64,xxx16',
        32: 'data:image/png;base64,def32',
      },
    })
  })
})

describe('changeTextColor', () => {
  it('should change textColor', () => {
    expect(
      theApp({ textColor: '#112233' }, changeTextColor('#445566')),
    ).toEqual({
      textColor: '#445566',
    })
  })
})

describe('changeFillColor', () => {
  it('should change fillColor', () => {
    expect(
      theApp({ fillColor: '#112233' }, changeFillColor('#445566')),
    ).toEqual({
      fillColor: '#445566',
    })
  })
})

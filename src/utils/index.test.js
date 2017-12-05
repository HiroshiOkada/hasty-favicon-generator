import {
  dataURIToArrayBuffer,
  arrayBufferTodataURI,
  createIconFromPngs,
} from './index'
import {
  ICON16_BASE64,
  ICON24_BASE64,
  ICON32_BASE64,
  FAVICON_BASE64,
} from './test-data'

describe('dataURIToArrayBuffer', () => {
  it('should convert dataURI', () => {
    const uri123 = 'data:application/octet-stream;base64,AQID'
    const buf123 = dataURIToArrayBuffer(uri123)
    expect(new Uint8Array(buf123)).toEqual(Uint8Array.from([1, 2, 3]))
  })
})

describe('arrayBufferTodataURI', () => {
  it('should convert arrayBufferTodataURI', () => {
    const uri123 = 'data:application/octet-stream;base64,AQID'
    const buf123 = Uint8Array.from([1, 2, 3]).buffer
    expect(arrayBufferTodataURI('application/octet-stream', buf123)).toBe(
      uri123,
    )
  })
})

describe('dataURIToArrayBuffer and arrayBufferTodataURI', () => {
  it('should returning to the original by reverse conversion', () => {
    const base64List = [ICON16_BASE64, ICON24_BASE64, ICON32_BASE64]
    base64List.forEach(base64 => {
      const inDataURI = `data:image/png;base64,${base64}`
      const buf = dataURIToArrayBuffer(inDataURI)
      const outDataURI = arrayBufferTodataURI('image/png', buf)
      expect(outDataURI).toBe(inDataURI)
    })
  })
})

describe('createIconFromPngs', () => {
  it('should create ico from png', () => {
    const MIME = 'image/vnd.microsoft.icon'
    const pngs = {
      16: dataURIToArrayBuffer(`data:image/png;base64,${ICON16_BASE64}`),
      24: dataURIToArrayBuffer(`data:image/png;base64,${ICON24_BASE64}`),
      32: dataURIToArrayBuffer(`data:image/png;base64,${ICON32_BASE64}`),
    }
    const icon = createIconFromPngs(pngs)
    const outDataURI = arrayBufferTodataURI(MIME, icon)
    expect(outDataURI).toBe(`data:${MIME};base64,${FAVICON_BASE64}`)
  })
})

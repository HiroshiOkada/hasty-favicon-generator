import { toByteArray, fromByteArray } from 'base64-js'

export function createIconFromPngs(pngs) {
  const FILE_HEADER_SIZE = 6
  const INFO_HEADER_SIZE = 16
  const numIcons = Object.keys(pngs).length
  const headerSize = FILE_HEADER_SIZE + INFO_HEADER_SIZE * numIcons
  const totalDataSize = Object.keys(pngs)
    .map(size => pngs[size].byteLength)
    .reduce((acc, size) => acc + size)

  const fileSize = headerSize + totalDataSize
  const buf = new ArrayBuffer(fileSize)

  const fileHeder = new DataView(buf, 0, FILE_HEADER_SIZE)

  fileHeder.setUint16(0, 0, true)
  fileHeder.setUint16(2, 1, true) // .ico === 1
  fileHeder.setUint16(4, numIcons, true)

  let offset = FILE_HEADER_SIZE
  let dataOffset = headerSize

  Object.keys(pngs).forEach(size => {
    const infoHeader = new DataView(buf, offset, INFO_HEADER_SIZE)
    const dataSize = pngs[size].byteLength
    infoHeader.setUint8(0, size) // width
    infoHeader.setUint8(1, size) // height
    infoHeader.setUint8(2, 0) // no color paleet
    infoHeader.setUint8(3, 0) // reserved
    infoHeader.setUint16(4, 0, true) // num of color plane (0)
    infoHeader.setUint16(6, 0, true) // bit par pixel (0)
    infoHeader.setUint32(8, dataSize, true) // data size
    infoHeader.setUint32(12, dataOffset, true) // offset to data

    const src = new Uint8Array(pngs[size])
    const dst = new Uint8Array(buf, dataOffset, dataSize)
    dst.set(src)

    offset += INFO_HEADER_SIZE
    dataOffset += dataSize
  })

  return buf
}

// this method only treat base64 dataURI
export function dataURIToArrayBuffer(dataURI) {
  const m = dataURI.match(/^data:([^,]*),(.*)/)
  if (!m) {
    return null
  }
  const head = m[1]
  const data = m[2]
  if (head.match(/base64/)) {
    return toByteArray(data).buffer
  }
  return null
}

export function arrayBufferTodataURI(mime, buf) {
  const data = fromByteArray(new Uint8Array(buf))
  return `data:${mime};base64,${data}`
}

export function getMessage(tag) {
  const lang = window.navigator.language.match(/^ja/) ? 'ja' : 'en'
  const message = {
    en: {
      title: 'Hasty favicon generator',
      download: 'Download',
      textColor: 'Text color',
      fillColor: 'Background color',
      help: [
        'Putting more than one characters in the input field and choosing the text color and background color.',
        'Then you can downlod apple-touch-icon.png and favicon.ico.',
      ],
    },
    ja: {
      title: '拙速 favicon ジェネレーター',
      download: 'ダウンロード',
      textColor: '文字の色',
      fillColor: '背景の色',
      help: [
        'これは、ちゃんと favicon をデザインするのが面倒くさい時に「仮の」favicon を作成するWebアプリです。',
        '入力欄に文字を入れ、文字の色と背景の色を選ぶと、favicon.ico とスマホ用の apple-touch-icon.png が作成できるので、「ダウンロード」ボタンでダウンロードして下さい。',
      ],
    },
  }
  return message[lang][tag]
}

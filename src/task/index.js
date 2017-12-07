import JSZip from 'jszip'
import { createIconFromPngs } from '../utils'
import { setDownloadData } from '../actions'

export function getImageWatcher(store) {
  return () => {
    const { images, downloadData } = store.getState()

    if (
      !images[16] ||
      !images[24] ||
      !images[32] ||
      !images[64] ||
      !images[180] ||
      downloadData
    ) {
      return
    }

    const zip = new JSZip()

    zip.file('apple-touch-icon.png', images[180])

    const pngs = {
      16: images[16],
      24: images[24],
      32: images[32],
      64: images[64],
    }
    const icon = createIconFromPngs(pngs)
    zip.file('favicon.ico', icon)

    const index = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title></title>
  <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
</head>
<body>
</body>
</html>`
    zip.file('index.html', index)

    zip
      .generateAsync({ type: 'arraybuffer' })
      .then(data => store.dispatch(setDownloadData(data)))
  }
}

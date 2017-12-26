import JSZip from 'jszip'
import { createIconFromPngs } from '../utils'
import { setDownloadData } from '../actions'

export function getImageWatcher(store) {
  return () => {
    const { images, downloadData, caption } = store.getState()

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

    const sizes = [16, 24, 32, 64]

    sizes.forEach(size => zip.file(`favicon-${size}.png`, images[size]))

    const pngs = {
      16: images[16],
      24: images[24],
      32: images[32],
      64: images[64],
    }
    const icon = createIconFromPngs(pngs)
    zip.file('favicon.ico', icon)

    const timeInMs = Date.now()
    const index = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>favicon-${caption}</title>
  <link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico?t=${
    timeInMs
  }">
  <link rel="icon" type="image/png" href="favicon-16.png?t=${
    timeInMs
  }" sizes="16x16">
  <link rel="icon" type="image/png" href="favicon-24.png?t=${
    timeInMs
  }" sizes="24x24">
  <link rel="icon" type="image/png" href="favicon-32.png?t=${
    timeInMs
  }" sizes="32x32">
  <link rel="icon" type="image/png" href="favicon-64.png?t=${
    timeInMs
  }" sizes="64x64">
  <link rel="apple-touch-icon" href="apple-touch-icon.png?t=${
    timeInMs
  }" sizes="180x180">
</head>
<body>
  <h1>favicon-${caption}</h1>
  <p>
    <img src="favicon-16.png?t=${timeInMs}" alt="16x16 favicon png">
    <img src="favicon-24.png?t=${timeInMs}" alt="24x24 favicon png">
    <img src="favicon-32.png?t=${timeInMs}" alt="32x32 favicon png">
    <img src="favicon-64.png?t=${timeInMs}" alt="64x64 favicon png">
    <img src="apple-touch-icon.png?t=${
      timeInMs
    }" alt="180x180 apple touch icon png">
  </p>
</body>
</html>`
    zip.file('index.html', index)

    zip
      .generateAsync({ type: 'arraybuffer' })
      .then(data => store.dispatch(setDownloadData(data)))
  }
}

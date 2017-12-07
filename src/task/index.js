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

    const pngs = {
      16: images[16],
      24: images[24],
      32: images[32],
      64: images[64],
    }
    const icon = createIconFromPngs(pngs)

    zip.file('touch-icon.png', images[180])
    zip.file('favicon.ico', icon)

    zip
      .generateAsync({ type: 'arraybuffer' })
      .then(data => store.dispatch(setDownloadData(data)))
  }
}

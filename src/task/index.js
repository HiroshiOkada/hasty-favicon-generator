import JSZip from 'jszip'
import { createIconFromPngs } from '../utils'

const shortSleep = () => new Promise(resolve => setTimeout(resolve, 100))

export async function createDownloadDataAsync(images) {
  console.log('A')
  const zip = new JSZip()

  // Wait until all the images are ready
  while (
    !images[16] &&
    !images[24] &&
    !images[32] &&
    !images[64] &&
    !images[180]
  ) {
    /* eslint-disable no-await-in-loop */
    await shortSleep()
    /* eslint-enable no-await-in-loop */
  }

  const pngs = {
    16: images[16],
    24: images[24],
    32: images[32],
    64: images[64],
  }
  const icon = createIconFromPngs(pngs)

  zip.file('touch-icon.png', images[180])
  zip.file('favicon.ico', icon)

  return zip.generateAsync({ type: 'arraybuffer' })
}

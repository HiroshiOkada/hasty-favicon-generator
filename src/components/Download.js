import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Download.css'
import { CAPTION, DOWNLOAD_DATA } from '../reducers'
import { arrayBufferTodataURI, getMessage } from '../utils'

class Download extends Component {
  handleClick(event) {
    const { caption, downloadData } = this.props
    const link = event.target

    link.href = arrayBufferTodataURI('application/zip', downloadData)
    link.download = `favicon-${caption}.zip`
  }

  render() {
    const { downloadData } = this.props
    if (downloadData) {
      /* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/href-no-hash */
      return (
        <div className="Download">
          <a
            href="#"
            onClick={e => this.handleClick(e)}
            disabled={!!downloadData}
          >
            {getMessage('download')}
          </a>
        </div>
      )
      /* eslint-enable jsx-a11y/anchor-is-valid, jsx-a11y/href-no-hash */
    }
    return (
      <div className="Download">
        <p>Wait</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  caption: state[CAPTION],
  downloadData: state[DOWNLOAD_DATA],
})

Download.propTypes = {
  caption: PropTypes.string.isRequired,
  downloadData: PropTypes.instanceOf(ArrayBuffer),
}

export default connect(mapStateToProps)(Download)

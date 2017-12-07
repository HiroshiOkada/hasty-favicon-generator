import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Caption.css'
import { clearImages, changeCaption, setDownloadData } from '../actions'
import { createDownloadDataAsync } from '../task'
import { CAPTION, IMAGES } from '../reducers'

class Caption extends Component {
  handleChange(event) {
    const newValue = event.target.value
    const { images } = this.props
    this.props.change(newValue, images)
  }

  render() {
    const { caption } = this.props
    return (
      <div className="Caption">
        <input onChange={e => this.handleChange(e)} value={caption} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  caption: state[CAPTION],
  images: state[IMAGES],
})
const mapDispatchToProps = dispatch => ({
  change: (caption, images) => {
    dispatch(setDownloadData(null))
    dispatch(clearImages())
    dispatch(changeCaption(caption))
    createDownloadDataAsync(images).then(data =>
      dispatch(setDownloadData(data)),
    )
  },
})

Caption.propTypes = {
  images: PropTypes.shape({
    16: PropTypes.instanceOf(ArrayBuffer),
    24: PropTypes.instanceOf(ArrayBuffer),
    32: PropTypes.instanceOf(ArrayBuffer),
    64: PropTypes.instanceOf(ArrayBuffer),
  }).isRequired,
  caption: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Caption)

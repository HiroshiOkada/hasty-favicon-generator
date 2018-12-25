import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Canvas.css'
import { addUpdateImage } from '../actions'
import { dataURIToArrayBuffer } from '../utils'

class Canvas extends Component {
  componentDidMount() {
    this.drawCaption()
  }

  componentDidUpdate() {
    this.drawCaption()
  }

  drawCaption() {
    const {
      size,
      caption,
      offsets,
      textColor,
      fillColor,
      putImage,
    } = this.props
    const ctx = this.canvas.getContext('2d')

    // Todo: remove it when canvas test complete
    if (!ctx) {
      return
    }

    ctx.clearRect(0, 0, size, size)
    ctx.fillStyle = fillColor
    ctx.fillRect(0, 0, size, size)
    ctx.font = `${size}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = textColor
    ctx.fillText(
      caption,
      (0.5 + offsets.x) * size,
      (0.5 + offsets.y) * size,
      size,
    )

    const data = dataURIToArrayBuffer(this.canvas.toDataURL())
    putImage(size, data)
  }

  render() {
    const { size, id } = this.props
    return (
      <div className="Canvas" id={id}>
        <canvas
          width={size}
          height={size}
          ref={canvas => {
            this.canvas = canvas
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  caption: state.caption,
  offsets: state.offsets,
  textColor: state.textColor,
  fillColor: state.fillColor,
})
const mapDispatchToProps = dispatch => ({
  putImage(size, data) {
    dispatch(addUpdateImage(size, data))
  },
})

Canvas.propTypes = {
  caption: PropTypes.string.isRequired,
  offsets: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  size: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
  putImage: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Canvas)

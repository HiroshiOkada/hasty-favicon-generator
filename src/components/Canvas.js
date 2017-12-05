import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Canvas.css'
import { addUpdateImageUrl } from '../actions'

class Canvas extends Component {
  componentDidMount() {
    this.drawCaption()
  }

  componentDidUpdate() {
    this.drawCaption()
  }

  drawCaption() {
    const { size, caption, textColor, fillColor } = this.props
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
    ctx.fillText(caption, size / 2, size / 2, size)
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
  textColor: state.textColor,
  fillColor: state.fillColor,
})
const mapDispatchToProps = dispatch => ({
  putImageUrl(size, url) {
    dispatch(addUpdateImageUrl(size, url))
  },
})

Canvas.propTypes = {
  caption: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)

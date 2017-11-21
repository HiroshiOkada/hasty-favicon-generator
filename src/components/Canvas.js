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
    const { size, caption } = this.props

    const ctx = this.canvas.getContext('2d')

    // Todo: remove it when canvas test complete
    if (!ctx) {
      return
    }

    ctx.clearRect(0, 0, size, size)
    ctx.font = `${size}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(caption, size / 2, size / 2)
  }

  render() {
    const { size } = this.props
    return (
      <div className="Canvas">
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

const mapStateToProps = state => ({ caption: state.caption })
const mapDispatchToProps = dispatch => ({
  putImageUrl(size, url) {
    dispatch(addUpdateImageUrl(size, url))
  },
})

Canvas.propTypes = {
  caption: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)

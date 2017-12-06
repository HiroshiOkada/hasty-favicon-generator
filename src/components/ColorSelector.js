import React, { Component } from 'react'
import CompactPicker from 'react-color'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ColorSelector.css'
import { changeTextColor, changeFillColor } from '../actions'
import { TEXT_COLOR, FILL_COLOR } from '../reducers'

class ColorSelector extends Component {
  handleChangeComplete(color) {
    this.props.setColor(color.hex)
  }

  render() {
    const { target } = this.props

    return (
      <div className="ColorSelector" id={target}>
        <p>{target === TEXT_COLOR ? 'テキストの色' : '背景色'}</p>
        <CompactPicker
          color={this.props.color}
          onChangeComplete={color => this.handleChangeComplete(color)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, orgProps) => ({
  color: state[orgProps.target],
})

const mapDispatchToProps = (dispatch, orgProps) => ({
  setColor: color => {
    switch (orgProps.target) {
      case TEXT_COLOR:
        dispatch(changeTextColor(color))
        break
      case FILL_COLOR:
        dispatch(changeFillColor(color))
        break
      default:
        break
    }
  },
})

ColorSelector.propTypes = {
  setColor: PropTypes.func.isRequired,
  target: PropTypes.oneOf([TEXT_COLOR, FILL_COLOR]).isRequired,
  color: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorSelector)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Adjuster.css'
import {
  clearImages,
  changeOffsets,
  changeFontScale,
  setDownloadData,
} from '../actions'
import { OFFSETS } from '../reducers'

class Adjuster extends Component {
  onOffsetBtnClick(event, diff) {
    const x = this.props.offsets.x + diff.x
    const y = this.props.offsets.y + diff.y
    this.props.setOffsets({ x, y })
  }

  onChangeFontScaleBtnClick(event, diff) {
    this.props.updateFontScale(diff)
  }

  render() {
    return (
      <div className="Adjuster">
        <button onClick={e => this.onOffsetBtnClick(e, { x: -1 / 32, y: 0 })}>
          <span role="img" aria-label="left">
            ⬅️
          </span>
        </button>
        <button onClick={e => this.onOffsetBtnClick(e, { x: 0, y: -1 / 32 })}>
          <span role="img" aria-label="up">
            ⬆️
          </span>
        </button>
        <button onClick={e => this.onOffsetBtnClick(e, { x: 0, y: 1 / 32 })}>
          <span role="img" aria-label="down">
            ⬇️
          </span>
        </button>
        <button onClick={e => this.onOffsetBtnClick(e, { x: 1 / 32, y: 0 })}>
          <span role="img" aria-label="right">
            ➡️
          </span>
        </button>
        <button onClick={e => this.onChangeFontScaleBtnClick(e, 5)}>
          <span role="img" aria-label="right">
            ➕
          </span>
        </button>
        <button onClick={e => this.onChangeFontScaleBtnClick(e, -5)}>
          <span role="img" aria-label="right">
            ➖
          </span>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  offsets: state[OFFSETS],
})

const mapDispatchToProps = dispatch => ({
  setOffsets: offsets => {
    dispatch(setDownloadData(null))
    dispatch(clearImages())
    dispatch(changeOffsets(offsets))
  },
  updateFontScale: diff => {
    dispatch(setDownloadData(null))
    dispatch(clearImages())
    dispatch(changeFontScale(diff))
  },
})

Adjuster.propTypes = {
  offsets: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  setOffsets: PropTypes.func.isRequired,
  updateFontScale: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Adjuster)

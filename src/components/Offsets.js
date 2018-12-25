import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Offsets.css'
import { clearImages, changeOffsets, setDownloadData } from '../actions'
import { OFFSETS } from '../reducers'

class Offsets extends Component {
  handleClick(event, diff) {
    const x = this.props.offsets.x + diff.x
    const y = this.props.offsets.y + diff.y
    this.props.change({ x, y })
  }

  render() {
    return (
      <div className="Offsets">
        <button onClick={e => this.handleClick(e, { x: -1 / 32, y: 0 })}>
          <span role="img" aria-label="left">
            ⬅️
          </span>
        </button>
        <button onClick={e => this.handleClick(e, { x: 0, y: -1 / 32 })}>
          <span role="img" aria-label="up">
            ⬆️
          </span>
        </button>
        <button onClick={e => this.handleClick(e, { x: 0, y: 1 / 32 })}>
          <span role="img" aria-label="down">
            ⬇️
          </span>
        </button>
        <button onClick={e => this.handleClick(e, { x: 1 / 32, y: 0 })}>
          <span role="img" aria-label="right">
            ➡️
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
  change: offsets => {
    dispatch(setDownloadData(null))
    dispatch(clearImages())
    dispatch(changeOffsets(offsets))
  },
})

Offsets.propTypes = {
  offsets: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  change: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offsets)

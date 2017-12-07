import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Caption.css'
import { clearImages, changeCaption, setDownloadData } from '../actions'
import { CAPTION } from '../reducers'

class Caption extends Component {
  handleChange(event) {
    const newValue = event.target.value
    this.props.change(newValue)
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
})

const mapDispatchToProps = dispatch => ({
  change: caption => {
    dispatch(setDownloadData(null))
    dispatch(clearImages())
    dispatch(changeCaption(caption))
  },
})

Caption.propTypes = {
  caption: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Caption)

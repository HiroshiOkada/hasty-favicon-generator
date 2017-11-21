import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Caption.css'
import { changeCaption } from '../actions'

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

const mapStateToProps = state => ({ caption: state.caption })
const mapDispatchToProps = dispatch => ({
  change: caption => dispatch(changeCaption(caption)),
})

Caption.propTypes = {
  caption: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Caption)

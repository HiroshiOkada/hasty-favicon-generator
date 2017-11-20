import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Message.css'
import { changeMessage } from '../actions'

class Message extends Component {
  handleChange(event) {
    const newValue = event.target.value
    this.props.change(newValue)
  }

  render() {
    const { message } = this.props
    return (
      <div className="Message">
        <p>{message}</p>
        <p>
          <input onChange={e => this.handleChange(e)} />
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({ message: state.message })
const mapDispatchToProps = dispatch => ({
  change: message => dispatch(changeMessage(message)),
})

Message.propTypes = {
  message: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)

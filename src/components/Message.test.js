import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Message from './Message'
import reducer from '../reducers'

const store = createStore(reducer)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <Message />
    </Provider>,
    div,
  )
})

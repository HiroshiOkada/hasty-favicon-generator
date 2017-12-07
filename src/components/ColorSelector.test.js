import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ColorSelector from './ColorSelector'
import reducer, { TEXT_COLOR, FILL_COLOR } from '../reducers'

const store = createStore(reducer)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ColorSelector target={TEXT_COLOR} />
    </Provider>,
    div,
  )
  ReactDOM.render(
    <Provider store={store}>
      <ColorSelector target={FILL_COLOR} />
    </Provider>,
    div,
  )
})

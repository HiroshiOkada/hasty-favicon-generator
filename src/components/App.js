import React, { Component } from 'react'
import './App.css'
import Caption from './Caption'
import Canvas from './Canvas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas size={32} />
        <Canvas size={24} />
        <Canvas size={16} />
        <Caption />
      </div>
    )
  }
}

export default App

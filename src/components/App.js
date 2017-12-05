import React, { Component } from 'react'
import './App.css'
import Caption from './Caption'
import Canvas from './Canvas'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas size={180} id="Touch180" />
        <Canvas size={64} id="Favicon64" />
        <Canvas size={32} id="Favicon32" />
        <Canvas size={24} id="Favicon24" />
        <Canvas size={16} id="Favicon16" />
        <Caption />
      </div>
    )
  }
}

export default App

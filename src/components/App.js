import React, { Component } from 'react'
import './App.css'
import Caption from './Caption'
import Canvas from './Canvas'
import ColorSelector from './ColorSelector'
import { TEXT_COLOR, FILL_COLOR } from '../reducers'
import Download from './Download'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hasty favicon generator</h1>
        <Canvas size={180} id="Touch180" />
        <Canvas size={64} id="Favicon64" />
        <Canvas size={32} id="Favicon32" />
        <Canvas size={24} id="Favicon24" />
        <Canvas size={16} id="Favicon16" />
        <Caption />
        <Download />
        <ColorSelector target={TEXT_COLOR} />
        <ColorSelector target={FILL_COLOR} />
      </div>
    )
  }
}

export default App

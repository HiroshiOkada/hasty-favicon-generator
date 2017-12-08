import React from 'react'
import './Help.css'
import { getMessage } from '../utils'

function Help() {
  return (
    <div className="Help">
      {getMessage('help')[0]}
      <br />
      {getMessage('help')[1]}
    </div>
  )
}

export default Help

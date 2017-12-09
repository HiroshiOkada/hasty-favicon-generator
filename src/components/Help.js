import React from 'react'
import './Help.css'
import { getMessage } from '../utils'

function Help() {
  return (
    <div className="Help">
      <p>
        {getMessage('help')[0]}
        <br />
        {getMessage('help')[1]}
      </p>
      <p className="Help-Source">
        <a
          href="//github.com/HiroshiOkada/hasty-favicon-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          {getMessage('source')}
        </a>
      </p>
    </div>
  )
}

export default Help

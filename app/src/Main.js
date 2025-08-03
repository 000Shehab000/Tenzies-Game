import React from 'react'
import './style/App.css'
import Die from './components/Die'

export default function Main() {
  return (
    <div className="container">
      <div className="board">
        <div className="die-container">
          <Die value={5} />
          <Die value={5} />
          <Die value={5} />
          <Die value={5} />
          <Die value={5} />
          <Die value={5} />
          <Die value={5} />
          <Die value={5} />
          <Die value={5} />
          <Die value={5} />
        </div>
      </div>
    </div>
  )
}

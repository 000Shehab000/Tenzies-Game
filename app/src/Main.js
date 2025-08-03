import React from 'react'
import './style/App.css'
import Die from './components/Die'

export default function Main() {
  const [newDice, setNewDice] = React.useState(getAllNewDice())

  function getAllNewDice() {
    let allNewDice = []
    for (let i = 0; i < 10; i++) {
      allNewDice.push(Math.ceil(Math.random() * 6))
    }
    return allNewDice
  }

  const diceElements = newDice.map((number, index) => (
    <Die key={index} value={number} />
  ))

  return (
    <div className="container">
      <div className="board">
        <div className="die-container">{diceElements}</div>
      </div>
    </div>
  )
}

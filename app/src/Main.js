import React from 'react'
import './style/App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'

export default function Main() {
  const [dice, setDice] = React.useState(getAllNewDice())

  function getAllNewDice() {
    let allNewDice = []
    for (let i = 0; i < 10; i++) {
      allNewDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      })
    }
    return allNewDice
  }

  function rollDice() {
    setDice((pervDice) =>
      pervDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    )
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    )
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      hold={hold}
      id={dieObj.id}
      isHeld={dieObj.isHeld}
      key={dieObj.id}
      value={dieObj.value}
    />
  ))

  return (
    <div className="container">
      <div className="board">
        <div className="die-container">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll
        </button>
      </div>
    </div>
  )
}

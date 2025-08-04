import React from 'react'
import './style/App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function Main() {
  const [dice, setDice] = React.useState(() => getAllNewDice())

  const gameWon = dice.every(
    (die) => die.isHeld && dice.every((die) => die.value === dice[0].value)
  )

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
    if (!gameWon) {
      setDice((pervDice) =>
        pervDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      )
    } else {
      setDice(getAllNewDice())
    }
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
      {gameWon && <Confetti />}
      <div className="board">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-container">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          {gameWon ? 'New Game' : 'Roll'}
        </button>
      </div>
    </div>
  )
}

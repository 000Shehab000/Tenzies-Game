import React from 'react'
import '../style/Die.css'

export default function Die(props) {
  return (
    <button
      className={props.isHeld ? 'die isHeld' : 'die'}
      onClick={() => props.hold(props.id)}
    >
      {props.value}
    </button>
  )
}

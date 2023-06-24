import React from 'react'
import './players.css'
export default function Players(props) {
  return (
    <div className='players'>
        <h1>Name  <br />{props.name}</h1>
        <h1>Win  <br />{props.win}</h1>
        <h1>Lose  <br />{props.lose}</h1>
    </div>
  )
}

import React from 'react'
import './players.css'
export default function Players(props) {
  return (
    <div className='players'>
        <h1 style={{paddingLeft:'15%'}}>Name  <br />{props.name}</h1>
        <h1 style={{paddingLeft:'15%'}}>Win  <br />{props.win}</h1>
        <h1 style={{paddingLeft:'15%'}}>Lose  <br />{props.lose}</h1>
    </div>
  )
}

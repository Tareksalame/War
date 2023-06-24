import React from 'react'
import { useState } from 'react'
import Players from './Players'

export default function HomePage(props) {

    const[name,setName] = useState('')
    const[arr,setArr] = useState([])
    let[flag,setFlag] = useState(false)

    const clickPlayers = ()=>
    {
        if(flag === false)
        {
            setFlag(true)
            setArr(props.playersArr.map((val)=>
            {
                return <Players name={val.name}  win={val.win} lose={val.lose} />
            }))
            console.log(flag)
        }
        else
        {
            setFlag(false)
            setArr(props.playersArr.map((val)=>
            {
                return <div></div>
            }))
            console.log(flag)
        }
    }

    
    const check = ()=>
    {
        props.gamestart(name)
    }
  return (
    <div className='mainDiv'>
        <h1 className='war'>War</h1>
        <input className='nameInput' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter Your Name' />

        <button className='buttons' onClick={check}>Play Now</button>
        <button className='buttons' onClick={clickPlayers}>Click To See Players</button>
        <div>{arr}</div>
    </div>
  )
}

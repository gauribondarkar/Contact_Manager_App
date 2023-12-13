import React from 'react'
import About from './About'
import { useNavigate } from 'react-router-dom'

function Temp() {
    const nav = useNavigate();
    const id = 1;
  return (
    <div>
        <h1>we are on temp</h1>
        <button onClick={() =>{nav ("/About", {state : {id: id}})}}>click</button>
    </div>
  )
}

export default Temp

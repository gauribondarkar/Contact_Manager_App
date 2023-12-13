import React from 'react'
import { useLocation } from 'react-router-dom'

function About() {
    const loc = useLocation();
    console.log(loc.state)
  return (
    <div>
        <h1>we are on about now{loc.state.id}</h1>
    </div>
  )
}

export default About
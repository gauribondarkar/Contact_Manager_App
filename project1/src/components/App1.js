import React from 'react'
import {BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import Temp from './Temp';
import About from './About';

function App1() {
  return (
    <div>
        <Router>
        <h1>We are on main componet</h1>
        <Link to="/temp"><button>click</button></Link>
        <Routes>
            <Route path='/temp' element={<Temp/>} />
            <Route path='/About' element={<About/>} />
        </Routes>

        
        </Router>
        
    </div>
  )
}

export default App1
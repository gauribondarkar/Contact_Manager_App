import React from 'react'
import { useNavigate,useLocation} from 'react-router-dom'
import bin from "../images/dustbinjpg.jpg"

function Delete(props) {
    const loc = useLocation().state;
    const navigate = useNavigate();
    const style ={
        backgroundColor:"rgb(165, 165, 215)",
        width: "400px",
        padding:"20px",
        position: "absolute",
        top: "25%",
        left: "37%"
        
    }

    const image = {
        height: "200px",
        
    }

  return (
    
    <div style={style}>
        {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis deserunt laborum, voluptatem tempora sed repellendus ut, architecto commodi doloribus veritatis eum ad libero nemo est explicabo, consectetur neque quaerat!</h1> */}
        <h3>Are you sure want to delete this contact?</h3>

        <div 
        style={{display: 'flex', justifyContent:"space-evenly"}}>
            <button 
            className="ui button blue"
            onClick={() => props.getContactId(loc.id)}>yes</button>

            <button 
            className="ui button blue"
            onClick={() => navigate("/list")}>no</button>
        </div>

        <div  
        style={{display:"flex", justifyContent:'center', margin: "20px"}}>
            <img src={bin} alt="dustbin" style={image}/>
        </div>

        <button className="ui button blue"
        onClick={()=>navigate("/list")}>go back to list</button>
    </div>
  )
}

export default Delete
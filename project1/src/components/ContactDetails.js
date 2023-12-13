import React from 'react'
import { useLocation,Link } from 'react-router-dom';
import user from "../images/avatar2.jpg";

function ContactDetails() {
    const loc = useLocation().state;
    
  return (
      <div className='main'>
        <h1>details page</h1>
        <div className='ui card centered'>
            <div className='image'> 
                <img src={user} alt="user" />
            </div>

            <div className='content'>
                <div className='header'>
                {loc.name}
                </div>

                <div className='description'>
                    {loc.email}
                </div>
            </div>
        </div>

        <div className='center-div'>
            <Link to = "/list">
                <button className='ui button blue center'>
                    Back to Contact List
                </button>
            </Link> 
        </div>
        
    </div>
  );
}

export default ContactDetails;
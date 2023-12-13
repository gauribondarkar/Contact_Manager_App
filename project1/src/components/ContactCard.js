import React from 'react';
import { useNavigate } from "react-router-dom";
import user from '../images/user.avif';

const ContactCard = (props) => {
    const navigate = useNavigate();
    const {id, name, email} = props.contact;
    
    const style= {display:'grid',
                  gridTemplateColumns: "400px 400px 400px",
                }

    function details () {
        navigate(`/contact/${id}`, {state: props.contact})
    }
    return (
        <div className='item' style={style}>
            <div style={{display:"flex"}}>
                <img className="ui avatar image" src={user} alt="user" />
                <div className='content'>
                    
                    
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                    
                </div>
            </div>
                <div>
                    <button 
                    className='ui button blue right' 
                    onClick={details}>
                        see details
                    </button>
                </div>
                <i className='trash alternate outline icon' 
                style = {{color: "red", marginTop: "7px"}}
                onClick={() => navigate("/delete" , {state:{id: id}})}></i>
        </div>
    );
}

export default ContactCard;
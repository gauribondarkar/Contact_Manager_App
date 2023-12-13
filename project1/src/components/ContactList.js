import React from 'react';
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';
// import {Link} from "react-router-dom";



const ContactList = (props) => {
    
    console.log(props.contacts);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <>
            
            <ContactCard 
                    contact = {contact} 
                    clickHandler={deleteContactHandler}
                    key={contact.id}/>
             </>  
        );
    });
    return (
        <div className='main'>
            <h2>
                Contact List
            </h2>  
            <Link to="/"> 
                <button className='ui button blue right'>Add Contact</button>
            </Link>
            <div className="ui celled list" style={{backgroundColor:"rgb(165, 165, 215)"}}>
            
            {renderContactList}
            
            </div>
        </div>
        
    );
}

export default ContactList;
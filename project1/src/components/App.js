import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import Add from "./AddContact";
import Delete from "./Delete"


function App() {
  
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  
  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, {id:uuid(), ...contact}]);
    // console.log(contacts);
  };

  const removeContactHandler = (id) => {
    // <delete navigate("/delete")/>
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    }
    );

    setContacts(newContactList);
    alert("Contact is deleted successfully..👍")
  };
  // useEffect (() => {
  //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retrieveContacts) setContacts(retrieveContacts);
  // },[]);

  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      <Router>
      <Header />
          <Routes>
            <Route path = "/"  element = {<Add addContactHandler={addContactHandler}/>} />
            <Route path='/list' element = {<ContactList contacts = {contacts} getContactId = {removeContactHandler} />}/>
            <Route path="/contact/:id" element = {<ContactDetails/>}/>
            <Route path="/delete" element= {<Delete getContactId = {removeContactHandler}/>} />
          </Routes>
        </Router>   
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";


function App() {
  //const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]); // adding the contact list
  };

  // useEffect(() => {
  //    const retriveContacts = JSON.parse(localStorage.getItem('contacts'));
  //    if(retriveContacts) {
  //     setContacts(retriveContacts);
  //    }

  // }, [])
  // for getting and viewing the date into the App.js

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts)); // for Adding data into local storage
  }, [contacts]);

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Karan",
  //     email: "karan@gmail.com"

  //   },

  //   {
  //     id: "2",
  //     name: "macafe",
  //     email: "macafe@gmail.com"

  //   }
  // ]

  return (
    <div className="ui container">
      Karan
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard contact={contact} />
      </div>
    );
  });

  return (
    <div className="ui celled list">
      ContactList
      {renderContactList}
      <button
        className="ui inverted "
        style={{ marginTop: "7px" }}
        onClick={props.handleClick}
      >
        Click to Homepage
      </button>
    </div>
  );
};

export default ContactList;

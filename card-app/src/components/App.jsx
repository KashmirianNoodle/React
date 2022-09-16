import React from "react";
import Card from "./card";
import contacts from "../contacts";
console.log(contacts)

function createCard(contacts) {
  return (
    <Card
      id={contacts.id}
      key={contacts.id}
      name={contacts.name}
      imgURL={contacts.imgURL}
      phone={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}


export default App;

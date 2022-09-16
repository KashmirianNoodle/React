import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <p> hello</p>
      <Form user_is_registered={userIsRegistered} />
    </div>
  );
}

export default App;

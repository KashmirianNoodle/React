import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.user_is_registered && <Input type="passowrd" placeholder="Confirm Password" />}
      <Button type="submit" text={props.user_is_registered ? "Login" : "Register"} />
    </form>
  );
}

export default Form;

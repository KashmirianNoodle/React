import React from "react";

export default function Form(props) {
  return (
    <form onSubmit = {props.handleClick}>
    <div className="form">
      <input value={props.content} onChange={props.handleChange} type="text" />
      <button>
        <span>Add</span>
      </button>
    </div>
    </form>
  );
}

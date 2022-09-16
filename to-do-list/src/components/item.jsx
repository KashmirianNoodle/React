import React from "react";

export default function Item(props) {
  // function eventHandler(event) {
  //   event.target.style.setProperty("text-decoration","line-through")
  //   setTimeout(() => {
  //   props.onChecked(props.id)
  //   }, 100);
  // }

  return (
    <div>
      <ul>
        <li onClick= {() => props.onChecked(props.id)}> {props.text}</li>
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import Item from "./item";
import Heading from "./heading";
import Form from "./form";

function App() {
  const [content_array, setContentArray] = useState(["Click Add to add an item"]);
  const [content, setContent] = useState("");

  function handleChange(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  function handleClick(event) {
    event.preventDefault()
    setContent(function (prev) {
      content_array.push(prev);
      return "";
    });
  }
  function deleteItem(id) {
    setContentArray((prevValue) =>
      prevValue.filter((item, index) => index !== id)
    );
  }

  return (
    <div className="container">
      <Heading />
      <Form
        content={content}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {content_array.map((text, index) => (
        <Item id={index} key={index} text={text} onChecked={deleteItem} />
      ))}
    </div>
  );
}

export default App;

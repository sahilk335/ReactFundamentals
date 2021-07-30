import React from "react";
import { useState } from "react";
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally
const UseStatebasics = () => {
  const initials = "Hello World";

  const [text, setText] = useState(initials);

  const onClickListener = () => {
    if (text === initials) {
      setText("Hello There !");
    } else {
      setText(initials);
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={onClickListener}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStatebasics;

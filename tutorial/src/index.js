import React from "react";
import ReactDom from "react-dom";

//Greeting is a react component and it starts with capital letter
function Greeting() {
  return <h4>This is Sahil and this is my first Component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));

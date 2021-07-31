import React from "react";

const UseStateObjects = () => {
  const [person, setPerson] = React.useState({
    name: "peter",
    age: 24,
    message: "Random Message",
  });

  const btnOnClickListener = () => {
    setPerson({ ...person, message: "Message Changed" });
  };

  return (
    <React.Fragment>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button className="btn" onClick= {btnOnClickListener}>
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateObjects;

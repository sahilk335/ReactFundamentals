import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [people, setPeople] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
    } else {
      console.log("Empty Values");
    }
    console.log("Submit");
  };

  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add person</button>
        </form>

        {people.map((person, index) => {
          const { id, name, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;

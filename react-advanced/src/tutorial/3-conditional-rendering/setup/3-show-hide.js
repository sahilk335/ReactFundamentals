import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = React.useState(false);

  return (
    <React.Fragment>
      <h1></h1>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <ShowAnotherComponent />}
    </React.Fragment>
  );
};

const ShowAnotherComponent = () => {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
    </React.Fragment>
  );
};

export default ShowHide;

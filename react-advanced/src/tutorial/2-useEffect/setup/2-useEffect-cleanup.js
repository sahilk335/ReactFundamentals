import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = React.useState(window.innerWidth);

  const checkSize = () => {
    setValue(window.innerWidth);
  };

  React.useEffect(() => {
    console.log("Rendering");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("removing event listener");
      window.removeEventListener("resize", checkSize)};
  });

  return (
    <React.Fragment>
      <h1>Window Size</h1>
      <h1>{value} px</h1>
    </React.Fragment>
  );
};

export default UseEffectCleanup;

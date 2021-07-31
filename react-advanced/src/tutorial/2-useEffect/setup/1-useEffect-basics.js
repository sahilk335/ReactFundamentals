import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if(value>=2){
      document.title=`New Message (${value})`;
    }
    console.log("Hello World");
  }, [value]);

  React.useEffect(()=>{
    console.log("Called Every time on rendering");
  })

    React.useEffect(() => {
      console.log("Called once on rendering");
    },[]);


  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increment
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;

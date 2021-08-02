import React from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = React.useRef(null);
  const divContainer = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  //Note when you click handleSubmit or type any input re-trigger component does not happen, which use to happen in every value change of useState
  React.useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
        <div ref={divContainer}>Hello World</div>
      </form>
    </React.Fragment>
  );
};

export default UseRefBasics;

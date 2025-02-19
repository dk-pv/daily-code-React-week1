import React from "react";

const MyComponent = ({ name }) => {
  console.log("Rendering: MyComponent");
  return <h2>Hello, {name}!</h2>;
};

export default React.memo(MyComponent);

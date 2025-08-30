import React from "react";
import "./App.css";

// function Greeting() {
//   return React.createElement("h2", {}, "Hello World!");
// }

function Greeting() {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Hello World!")
  );
}

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <Greeting />
    </>
  );
}

export default App;

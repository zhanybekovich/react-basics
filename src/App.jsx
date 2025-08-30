import React from "react";
import "./App.css";

function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <Greeting />
    </>
  );
}

export default App;

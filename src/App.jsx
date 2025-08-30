import React from "react";
import "./App.css";

function Greeting() {
  return (
    <>
      <div>
        <h2>
          Hello From My <em>First</em> Component!
        </h2>
      </div>
    </>
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

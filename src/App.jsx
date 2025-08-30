import "./App.css";

function Greeting() {
  return <h2>My First Component</h2>;
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

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);

  // let counter = 0
  const addvalue = () => {
    console.log("Clicked", counter);

    if (counter >= 20) {
      setCounter((counter = 20));
    } else {
      setCounter(counter + 1);
    }
  };

  const RemoveValue = () => {
    if (counter <= 0) {
      setCounter((counter = 0));
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello React Boy</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addvalue}>Add Value</button> <br />
      <button onClick={RemoveValue}>Remove Value</button>
      <h3>Footer {counter}</h3>
    </>
  );
}

export default App;

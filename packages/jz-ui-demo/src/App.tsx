import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "jz-ui-base";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;

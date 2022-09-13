import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Wallet } from "./components/Wallet";

function App() {
  return (
    <div className='App'>
      <div>12345678910</div>
      <header className='App-header'>
        <Wallet />
      </header>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import MyForm from "./Components/Form/MyForm.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to home</h1>
        </header>
        <div className="App-intro">
          <MyForm />
        </div>
      </div>
    );
  }
}

export default App;

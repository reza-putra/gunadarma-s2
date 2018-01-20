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
<<<<<<< HEAD
          <h1 className="App-title">kocak</h1>
=======
          <h1 className="App-title">Welcome to React Course</h1>
>>>>>>> origin/frontend-1-head
        </header>
        <p className="App-intro">
          <MyForm />
        </p>
      </div>
    );
  }
}

export default App;

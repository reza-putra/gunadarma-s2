import React, { Component } from "react";
//import MyForm from "./Components/Form/MyForm.js";
import MyKonten from "./Components/Profil/Profil.js"
import "./mine.css";

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React Course</h1>
      //   </header>
      //   <p className="App-intro">
      //     <MyForm />
      //   </p>
      // </div>
      <MyKonten />
    );
  }
}

export default App;

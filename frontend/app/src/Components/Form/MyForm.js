import React, { Component } from "react";
import axios from "axios";
import MyInput from "./MyInput";

class MyForm extends Component {
  state = {
    username: { name: "name", type: "text", label: "nama", value: "" },
    password: {
      name: "password",
      type: "password",
      label: "password",
      value: ""
    }
  };

  handleOnSubmit(e) {
    e.preventDefault();
    axios
      .post("/login", {
        username: this.state.username.value,
        password: this.state.password.value
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(event, name) {
    let update = {};
    if (name === "password") {
      update = {
        password: { ...this.state.password, value: event.target.value }
      };
    } else {
      update = {
        username: { ...this.state.username, value: event.target.value }
      };
    }
    this.setState(update);
  }

  render() {
    const { username, password } = this.state;
    return (
      <form>
        <MyInput
          key={username.name}
          name={username.name}
          type={username.type}
          label={username.label}
          value={username.value}
          onChange={event => this.handleChange(event, username.name)}
        />
        <MyInput
          key={password.name}
          name={password.name}
          type={password.type}
          label={password.label}
          value={password.value}
          onChange={event => this.handleChange(event, password.name)}
        />
        <button type="button" onClick={e => this.handleOnSubmit(e)}>
          Submit{" "}
        </button>
      </form>
    );
  }
}

export default MyForm;

<<<<<<< HEAD
import React, {Component}  from "react";
import MyInput from "./MyInput";


class MyForm extends Component {

  renderData(data) {
    return (
      <MyInput name={data.name}
      type = {data.type}
      label = {data.label}
      ClassName = {data.ClassName}
      />
    )
=======
import React, { Component } from "react";
import MyInput from "./MyInput";

class MyForm extends Component {
  renderData(data) {
    return <MyInput name={data.name} type={data.type} label={data.label} />;
>>>>>>> origin/frontend-1-head
  }

  render() {
    let data = [
<<<<<<< HEAD
      {name : "test", type:"email", label:"email"},
      {name : "nama", type:"text", label:"nama"},
      {name : "password", type:"password", label:"password"},
      {name : "btnsubmit", ClassName:"btn btn-info", type:"submit"},
=======
      { name: "test", type: "email", label: "email" },
      { name: "nama", type: "text", label: "nama" },
      {
        name: "password",
        type: "password",
        label: "password"
      }
>>>>>>> origin/frontend-1-head
    ];

    return <form>{data.map(this.renderData)}</form>;
  }
}

export default MyForm;

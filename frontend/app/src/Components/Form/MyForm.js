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
  }

  render() {
    let data = [
      {name : "test", type:"email", label:"email"},
      {name : "nama", type:"text", label:"nama"},
      {name : "password", type:"password", label:"password"},
      {name : "btnsubmit", ClassName:"btn btn-info", type:"submit"},
    ];

    return <form>{data.map(this.renderData)}</form>;
  }
}

export default MyForm;

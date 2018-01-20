import React, { Component } from "react";
import MyInput from "./MyInput";

class MyForm extends Component {
<<<<<<< HEAD
	renderData(data) {
		return (
			<MyInput name={data.name} 
			type={data.type} 
			label={data.label} />
		)	
	}
=======
  renderData(data) {
    return <MyInput name={data.name} type={data.type} label={data.label} />;
  }

  render() {
    let data = [
      { name: "test", type: "email", label: "email" },
      { name: "nama", type: "text", label: "nama" },
      {
        name: "password",
        type: "password",
        label: "password"
      }
    ];

    return <form>{data.map(this.renderData)}</form>;
  }
}
>>>>>>> 46406cd2a1d952564c21a428e97567bd4c04a881


	render() {
		let data = [
		{ name: "test", type: "email", label: "Email"},
		{ name: "nama", type: "text", label: "Nama"},
		{ name: "password", type: "password", label: "Password"}
		];

		return <form>{ data.map(this.renderData) }</form>;
	}
}



export default MyForm;
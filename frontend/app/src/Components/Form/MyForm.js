import React, { Component } from "react";
import MyInput from "./MyInput";

class MyForm extends Component {
	renderData(data) {
		return (
			<MyInput name={data.name} 
			type={data.type} 
			label={data.label} />
		)	
	}


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
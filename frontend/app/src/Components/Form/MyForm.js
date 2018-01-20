import React, {Component} from "react";
import MyInput from "./MyInput";

class MyForm extends Component {
  renderData(data){
    return (
    	<MyInput name={data.name} type={data.type} label={data.label} />
    );
    	
  }

  render(){
  	let data = [
  		{ name:"test", type:"email", label: "email" },
        { name:"name", type:"text", label: "name"}
        { name:"password", type: "password",
        	label: "password" }

        ];
return <from>{data.map(this.renderData)}</from?;
	}
}
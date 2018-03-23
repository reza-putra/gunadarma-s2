import React,{Component} from "react";
import axios from "axios";
import MyInput from "./MyInput";

class NewMahasiswa extends Component {
  state = {
    insert: [],
    inputs: [{
      name: "npm",
      type: "text",
      label: "npm",
      value: ""
    },
    {
      name: "nama",
      type: "text",
      label: "nama",
      value: ""
    },
    {
      name: "kelas",
      type: "text",
      label: "kelas",
      value: ""
    },
    {
      name: "jurusan",
      type: "text",
      label: "jurusan",
      value: ""
    },
    {
      name: "fakultas",
      type: "text",
      label: "fakultas",
      value: ""
    }]
  };

  handleOnSubmit(e) {
    const {inputs} = this.state;
    let data = {}
    inputs.map(input=>{
      var result = {};
      data[input.name] = input.value
    })
    axios
      .post("/insert", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(e, index) {
    let {inputs} = this.state;
    inputs[index].value = e.target.value
    
    this.setState({inputs: inputs});
  }

  renderForm(){
    const {inputs} = this.state
    return inputs.map((input, index)=>{
      return <MyInput
        key={index}
        pos={index}
        name={input.name}
        type={input.type}
        label={input.label}
        value={input.value}
        onChange={this.handleChange.bind(this)}
      />
    })
  }

  render() {
    return (
      <form>
        {this.renderForm()}
        <button type="button"
          onClick={event => this.handleOnSubmit(event)}>
          Submit
        </button>
      </form>
    );
  }
}

export default NewMahasiswa;

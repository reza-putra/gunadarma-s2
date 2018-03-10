import React, { Component } from "react";
import ReactDOM from 'react-dom';

class ApiCall2 extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    term: '',
    img: ''
  };

  const url = `http://localhost:8000/api/users`;
  fetch(url)
    .then(response => response.json())
    //term di kosongkan dan di set image nya...
    //.then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url }))
    .then(data => this.setState({term : data.data[3].nama}))
    .catch(e => console.log('error', e));
}

render() {
  return (
    <div className="App">
    {this.state.term}
    </div>
  );
}

}
export default ApiCall2;

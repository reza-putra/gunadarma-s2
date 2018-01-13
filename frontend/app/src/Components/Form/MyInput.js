import React from "react";

const logic = function() {};

const MyInput = props => (
  <div>
    <input placeholder={props.label} type={props.type} name={props.name} />
    <br />
  </div>
);

export default MyInput;

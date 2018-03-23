import React from "react";

const logic = function() {};

const MyInput = props => (
  <div>
    <input
      placeholder={props.label}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={e => props.onChange(e, props.pos)}
    />
    <br />
  </div>
);

export default MyInput;

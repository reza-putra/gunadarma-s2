import React from "react";

<<<<<<< HEAD
const MyInput = ({ name, type, label }) => (<input placeholder={label} type={type} name={name} />
	);
=======
const logic = function() {};

const MyInput = props => (
  <div>
    <input placeholder={props.label} type={props.type} name={props.name} />
    <br />
  </div>
);
>>>>>>> 46406cd2a1d952564c21a428e97567bd4c04a881

export default MyInput;

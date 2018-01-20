import React from "react";

<<<<<<< HEAD
const MyInput = ({ name, type, label, ClassName }) =>
<div>
<input class={ClassName} placeholder={label} type={type} name={name} />
<br/>
</div>
=======
const logic = function() {};

const MyInput = props => (
  <div>
    <input placeholder={props.label} type={props.type} name={props.name} />
    <br />
  </div>
);

>>>>>>> origin/frontend-1-head
export default MyInput;

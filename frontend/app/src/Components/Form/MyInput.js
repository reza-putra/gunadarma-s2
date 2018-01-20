import React from "react";

const MyInput = ({ name, type, label, ClassName }) =>
<div>
<input class={ClassName} placeholder={label} type={type} name={name} />
<br/>
</div>
export default MyInput;

import React from "react";
import MyInput from "./MyInput";

const MyForm = props => {
  return (
    <form>
      <MyInput name="test" type="email" />
    </form>
  );
};

export default MyForm;

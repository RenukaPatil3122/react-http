import React, { useState } from "react";
import useInput from "./hooks/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstname] = useInput("");
  const [lastName, bindLastName, resetLastname] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstname();
    resetLastname();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input {...bindFirstName} />
        </div>
        <div>
          <label>Last name</label>
          <input {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;

import React from "react";
import "./AddUser.css";

const AddUser = () => {
  return (
    <div className="fullbody">
      <form className="fullform">
        <h3>Add Users Form</h3>

        <label>User name</label>
        <input type="text" placeholder="User Name" />

        <label>Email</label>
        <input type="email" placeholder="User Email" />

        <button>Add Now</button>
      </form>
    </div>
  );
};

export default AddUser;

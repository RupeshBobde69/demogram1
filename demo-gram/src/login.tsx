import React from "react";
import { useState } from "react";

function login() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [submitData, setSubmitData] = useState<any>(null);
  const show = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
    console.log(userData);
  };
  const submitedData = () => {
    setSubmitData(userData);
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <p>{userData.username}</p>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={show} />
      </div>
      <div>
        <p>{userData.password}</p>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={show} />
      </div>
      <button type="submit" onClick={submitedData}>
        Login
      </button>
      <p>{submitData && JSON.stringify(submitData)}</p>
    </div>
  );
}

export default login;

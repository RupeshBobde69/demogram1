import React, { useState } from "react";

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [submitData, setSubmitData] = useState<any>(null);

  const show = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const submitedData = () => {
    setSubmitData(userData);
    onLogin(); // Mark as logged in
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

export default Login;

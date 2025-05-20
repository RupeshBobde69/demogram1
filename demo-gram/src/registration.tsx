import React from "react";
import { useState } from "react";

interface RegitationProps {
  handleRegister: () => void;
}

function Registration({ handleRegister }: RegitationProps) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitData, setSubmitData] = useState<any>(null);
  const show = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };
  const submitedData = () => {
    setSubmitData(userData);
    handleRegister();
  };
  return (
    <>
      <h2>Registration</h2>
      <div>
        <p>{userData.username}</p>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={show} />
        <br />
        <p>{userData.email}</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={show} />
        <br />
        <p>{userData.password}</p>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={show} />
        <br />
        <p>{userData.confirmPassword}</p>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={show}
        />
        <br />
        <button type="submit" onClick={submitedData}>
          Register
        </button>
        <p>{submitData && JSON.stringify(submitData)}</p>
      </div>
    </>
  );
}

export default Registration;

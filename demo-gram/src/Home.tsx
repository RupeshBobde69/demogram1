import { useState, useEffect } from "react";
import Registration from "./Registration";
import Login from "./Login";
import "./App.css";
import { Link } from "react-router-dom";


function Home() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegisteredMsg, setShowRegisteredMsg] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
    setShowRegisteredMsg(true);
  };

  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => setShowRegisteredMsg(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isRegistered]);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <>
      <div>
        <div>
          {isRegistered ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Registration handleRegister={handleRegister} />
          )}
          <p>
            {!isRegistered && "Please register."}
            {showRegisteredMsg && !isLoggedIn && "registered successfully!"}
            {isRegistered && !isLoggedIn && " Please log in."}
            {isRegistered && isLoggedIn && "Login successful!"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Registration Now" : "Login Directly"}
          </button>

        </div>
      </div>
    </>
  );
}

export default Home;


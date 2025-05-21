import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={() => {}} />} />
        <Route path="/registration" element={<Registration handleRegister={() => {}} />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default Routers;

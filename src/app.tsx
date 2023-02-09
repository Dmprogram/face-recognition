import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Particle from "./components/particles/particle";
import "./app.css";
import Signin from "./components/signin/signin";
import Register from "./components/register/register";
import MainPage from "./components/mainPage/mainPage";

const App = () => {
  return (
    <div className="App">
      <Particle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/login" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

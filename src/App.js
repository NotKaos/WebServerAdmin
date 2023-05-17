import React, { useState } from "react";
import Home from "./pages/Home";
import ComputerScience from "./pages/ComputerScience";
import Biology from "./pages/Biology";
import English from "./pages/English";

import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./services/protectedRoute";
import "./App.css";
import Philosophy from "./pages/Philosophy";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/computerScience"
            element={<ProtectedRoute element={ComputerScience} />}
          />
          <Route
            path="/biology"
            element={<ProtectedRoute element={Biology} />}
          />
          <Route
            path="/english"
            element={<ProtectedRoute element={English} />}
          />
          <Route
            path="/philosophy"
            element={<ProtectedRoute element={Philosophy} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<ProtectedRoute element={Home} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;

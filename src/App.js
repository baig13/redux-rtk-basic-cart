import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

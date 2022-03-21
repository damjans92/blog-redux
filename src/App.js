import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Category from "./components/Category";

import "./App.css";

function App() {
  return (
    <>
      <div className="grid">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

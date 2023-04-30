// Core
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage';

// Style
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

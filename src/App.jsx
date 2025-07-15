import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import SubmitComplaint from "./pages/SubmitComplaint";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const userId = 1; // Replace with login user ID or state

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/submit" element={<SubmitComplaint userId={userId} />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

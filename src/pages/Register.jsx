// pages/Register.js
import React, { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const register = async () => {
    await api.post("/auth/register", form);
    alert("Registered!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        className="w-full mb-3 p-2 border rounded"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={register} className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
    </div>
  );
}

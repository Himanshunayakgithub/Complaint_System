// pages/AdminPanel.js
import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminPanel() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api.get("/complaints/all").then((res) => setComplaints(res.data));
  }, []);

  const updateStatus = (id) => {
    const newStatus = prompt("Enter new status (Pending, Resolved, etc.):");
    api.put(`/complaints/status/${id}`, newStatus).then(() => {
      setComplaints(complaints.map(c => c.id === id ? { ...c, status: newStatus } : c));
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <div className="space-y-4">
        {complaints.map(c => (
          <div key={c.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p>{c.description}</p>
            <p className="text-sm text-gray-600">Category: {c.category} | Location: {c.location}</p>
            <p className="font-medium mt-2">Status: <span className="text-blue-600">{c.status}</span></p>
            <button onClick={() => updateStatus(c.id)} className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded">Update Status</button>
          </div>
        ))}
      </div>
    </div>
  );
}

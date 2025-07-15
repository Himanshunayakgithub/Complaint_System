// pages/SubmitComplaint.js
import React, { useState } from "react";
import api from "../services/api";

export default function SubmitComplaint({ userId }) {
  const [comp, setComp] = useState({
    title: "", description: "", category: "", location: "", user: { id: userId }
  });

  const submit = async () => {
    await api.post("/complaints/submit", comp);
    alert("Complaint submitted");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Submit Complaint</h2>
      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Title"
        onChange={(e) => setComp({ ...comp, title: e.target.value })}
      />
      <textarea
        className="w-full mb-3 p-2 border rounded"
        placeholder="Description"
        onChange={(e) => setComp({ ...comp, description: e.target.value })}
      />
      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Category"
        onChange={(e) => setComp({ ...comp, category: e.target.value })}
      />
      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Location"
        onChange={(e) => setComp({ ...comp, location: e.target.value })}
      />
      <button onClick={submit} className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
    </div>
  );
}

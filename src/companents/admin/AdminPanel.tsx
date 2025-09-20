import { useEffect, useState } from "react";
import axios from "axios";
import AddDoctor from "./AddDoctor";

interface Doctor {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
  bio: string;
}

export default function AdminPanel() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const loadDoctors = async () => {
    const res = await axios.get("https://api.example.com/doctors");
    setDoctors(res.data);
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <AddDoctor onAdded={loadDoctors} />
      <h2 className="text-2xl font-bold mt-8 mb-4">Doctorlar ro‘yxati</h2>
      <div className="grid grid-cols-3 gap-4">
        {doctors.map((doc) => (
          <div key={doc.id} className="shadow-md p-4 rounded-xl bg-white">
            <img
              src={doc.avatar}
              alt={doc.name}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-xl font-bold text-center mt-2">{doc.name}</h3>
            <p className="text-gray-600 text-center">{doc.specialization}</p>
            <p className="text-gray-500 text-sm text-center">{doc.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

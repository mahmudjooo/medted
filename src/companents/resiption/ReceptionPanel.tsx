import { useEffect, useState } from "react";
import axios from "axios";
import AddPatient from "./AddPatient";

interface Patient {
  id: string;
  name: string;
  age: number;
  illness: string;
  doctorId?: string;
}

export default function ReceptionPanel() {
  const [patients, setPatients] = useState<Patient[]>([]);

  const loadPatients = async () => {
    const res = await axios.get("https://api.example.com/patients");
    setPatients(res.data);
  };

  useEffect(() => {
    loadPatients();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Reception Panel</h1>
      <AddPatient onAdded={loadPatients} />

      <h2 className="text-2xl font-bold mt-8 mb-4">Bemorlar ro‘yxati</h2>
      <div className="grid grid-cols-2 gap-4">
        {patients.map((p) => (
          <div key={p.id} className="shadow-md p-4 rounded-xl bg-white">
            <h3 className="text-xl font-bold">
              {p.name} ({p.age} yosh)
            </h3>
            <p className="text-gray-600">Kasalligi: {p.illness}</p>
            <p className="text-gray-500 text-sm">Doctor ID: {p.doctorId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

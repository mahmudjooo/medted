import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Doctor {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
  bio: string;
}

export default function DoctorProfile() {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.example.com/doctors/${id}`)
        .then((res) => setDoctor(res.data))
        .catch(() => setDoctor(null));
    }
  }, [id]);

  if (!doctor) return <p>Doctor yuklanmoqda...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-xl bg-white">
      <div className="flex flex-col items-center">
        <img
          src={doctor.avatar}
          alt={doctor.name}
          className="w-40 h-40 rounded-full shadow-md"
        />
        <h1 className="text-3xl font-bold mt-4">{doctor.name}</h1>
        <p className="text-gray-600">{doctor.specialization}</p>
        <p className="text-gray-500 mt-2">{doctor.bio}</p>
      </div>
    </div>
  );
}

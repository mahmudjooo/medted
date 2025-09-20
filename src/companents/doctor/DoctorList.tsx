import { Link } from "react-router-dom";

interface Doctor {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
}

export default function DoctorList({ doctors }: { doctors: Doctor[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {doctors.map((doc) => (
        <div key={doc.id} className="shadow-lg p-4 rounded-xl bg-white">
          <img
            src={doc.avatar}
            alt={doc.name}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold text-center mt-2">{doc.name}</h2>
          <p className="text-gray-600 text-center">{doc.specialization}</p>
          <Link
            to={`/doctors/${doc.id}`}
            className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Profilni ko‘rish
          </Link>
        </div>
      ))}
    </div>
  );
}

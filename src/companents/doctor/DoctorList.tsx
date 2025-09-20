import { Link } from "react-router-dom";

interface Doctor {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
}

export default function DoctorList({ doctors }: { doctors: Doctor[] }) {
  if (!doctors || doctors.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-500 text-lg">
        ❌ Hozircha doctorlar mavjud emas
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        👨‍⚕️ Doctorlar Ro‘yxati
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
          >
            <img
              src={doc.avatar}
              alt={doc.name}
              className="w-28 h-28 rounded-full mx-auto shadow-md border-4 border-blue-100"
            />

            <h2 className="text-xl font-bold text-center mt-4 text-gray-800">
              {doc.name}
            </h2>

            <p className="text-center mt-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                {doc.specialization}
              </span>
            </p>

            <Link
              to={`/doctors/${doc.id}`}
              className="block mt-6 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition"
            >
              Profilni ko‘rish
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

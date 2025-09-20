import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

function Dashboard() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-600">📊 Dashboard</h1>
        <span className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium">
          {user.role.toUpperCase()}
        </span>
      </header>

      {/* Rolega qarab asosiy kontent */}
      <main>
        {user.role === "admin" && (
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              👨‍💼 Admin bo‘limi
            </h2>
            <p className="text-gray-600">
              Bu yerda admin foydalanuvchilarni boshqarishi, doktor va reception
              qo‘shishi mumkin.
            </p>
          </div>
        )}

        {user.role === "doctor" && (
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              👨‍⚕️ Doctor bo‘limi
            </h2>
            <p className="text-gray-600">
              Bu yerda doctor bemorlarni ko‘rishi, tashxis qo‘yishi va qabulni
              boshqarishi mumkin.
            </p>
          </div>
        )}

        {user.role === "reception" && (
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              🏢 Reception bo‘limi
            </h2>
            <p className="text-gray-600">
              Bu yerda reception bemorlarni ro‘yxatdan o‘tkazishi va qabul
              vaqtlarini belgilashi mumkin.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;

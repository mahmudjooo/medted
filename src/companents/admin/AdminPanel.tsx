import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
  role: "doctor" | "reception";
  avatar?: string;
  specialization?: string;
  dbio?: string;
}

export default function AdminPanel() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "doctor",
    specialization: "",
    bio: "",
  });

  const loadUsers = async () => {
    const res = await axios.get("https://api.example.com/users");
    setUsers(res.data);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("https://api.example.com/users", form);
    setForm({
      name: "",
      email: "",
      password: "",
      role: "doctor",
      specialization: "",
      bio: "",
    });
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div
      className="p-6 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/blue-abstract-medical-background-with-hexagons_1017-19369.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 h-screen p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">
          👨‍⚕️ Admin Panel
        </h1>

        {/* Yangi user qo‘shish formasi */}
        <form
          onSubmit={handleAdd}
          className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg p-6 rounded-2xl max-w-lg border border-blue-200"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
            ➕ Yangi foydalanuvchi qo‘shish
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ismi"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="password"
              placeholder="Parol"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full p-3 border rounded-xl shadow-sm bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="doctor">Doctor</option>
              <option value="reception">Reception</option>
            </select>

            {form.role === "doctor" && (
              <>
                <input
                  type="text"
                  placeholder="Mutaxassisligi"
                  value={form.specialization}
                  onChange={(e) =>
                    setForm({ ...form, specialization: e.target.value })
                  }
                  className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <textarea
                  placeholder="Bio"
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 rounded-xl shadow-md"
          >
            ➕ Qo‘shish
          </button>
        </form>

        {/* Ro‘yxat */}
        <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-700">
          👥 Foydalanuvchilar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((u) => (
            <div
              key={u.id}
              className="shadow-md p-6 rounded-2xl bg-white bg-opacity-90 text-center hover:shadow-xl transition"
            >
              <img
                src={
                  u.avatar ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt={u.name}
                className="w-24 h-24 rounded-full mx-auto shadow-md"
              />
              <h3 className="text-xl font-bold mt-4">{u.name}</h3>
              <p className="text-gray-600 capitalize">{u.role}</p>
              {u.role === "doctor" && (
                <div className="mt-2">
                  <p className="text-gray-500 font-medium">
                    {u.specialization}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{u.dbio}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import { Mail, Lock, User, BriefcaseMedical, Info } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "doctor" | "reception";
  avatar?: string;
  specialization?: string;
  bio?: string;
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
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-600 text-center">
        👨‍⚕️ Admin Panel
      </h1>

      {/* Card-style Add User */}
      <div className="max-w-lg mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            ➕ Yangi foydalanuvchi qo‘shish
          </h2>
          <form onSubmit={handleAdd} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Ism
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
                <User className="text-gray-400 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Foydalanuvchi ismi"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Email
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
                <Mail className="text-gray-400 mr-2" size={20} />
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Parol
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
                <Lock className="text-gray-400 mr-2" size={20} />
                <input
                  type="password"
                  placeholder="********"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Rol
              </label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option value="doctor">Doctor</option>
                <option value="reception">Reception</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Doctor extra fields */}
            {form.role === "doctor" && (
              <>
                <div>
                  <label className="block text-gray-600 mb-1 font-medium">
                    Mutaxassisligi
                  </label>
                  <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
                    <BriefcaseMedical
                      className="text-gray-400 mr-2"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Masalan: Kardiolog"
                      value={form.specialization}
                      onChange={(e) =>
                        setForm({ ...form, specialization: e.target.value })
                      }
                      className="w-full bg-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600 mb-1 font-medium">
                    Bio
                  </label>
                  <div className="flex items-start border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
                    <Info className="text-gray-400 mr-2 mt-1" size={20} />
                    <textarea
                      placeholder="Qisqacha ma’lumot..."
                      value={form.bio}
                      onChange={(e) =>
                        setForm({ ...form, bio: e.target.value })
                      }
                      className="w-full bg-transparent outline-none resize-none"
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md transition"
            >
              ➕ Qo‘shish
            </button>
          </form>
        </div>
      </div>

      {/* Users List */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 text-center">
        👥 Foydalanuvchilar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((u) => (
          <div
            key={u.id}
            className="shadow-lg p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition"
          >
            <img
              src={
                u.avatar ||
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt={u.name}
              className="w-24 h-24 rounded-full mx-auto shadow-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">{u.name}</h3>
            <p className="text-gray-500 text-center capitalize">{u.role}</p>
            {u.role === "doctor" && (
              <div className="mt-2 text-center">
                <p className="text-gray-600 font-medium">{u.specialization}</p>
                <p className="text-sm text-gray-400 mt-1">{u.bio}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

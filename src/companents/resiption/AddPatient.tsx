import { useState, useEffect } from "react";
import axios from "axios";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
}

export default function AddPatient({ onAdded }: { onAdded: () => void }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [illness, setIllness] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  // ❌ Buni ishlatmasak ham qolaversin
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    // const newUser = { ...form };

    // // faqat doctor qo‘shishni tekshirish
    // if (newUser.role === "doctor") {
    //   await axios.post("http://localhost:3000/users", newUser); // db.json ichiga yoziladi
    //   loadUsers();
    // }

    // setForm({
    //   name: "",
    //   email: "",
    //   password: "",
    //   role: "doctor",
    //   specialization: "",
    //   bio: "",
    // });
  };

  // 🔹 Doktorlarni db.json dan olish
  useEffect(() => {
    axios
      .get("http://localhost:3000/users?role=doctor")
      .then((res) => setDoctors(res.data));
  }, []);

  // 🔹 Bemor qo‘shish
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/patients", {
        name,
        age,
        illness,
        doctorId,
      });
      alert("✅ Bemor qo‘shildi va doktorga biriktirildi!");
      onAdded();
      setName("");
      setAge(0);
      setIllness("");
      setDoctorId("");
    } catch (err) {
      alert("❌ Xatolik yuz berdi!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-xl max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Bemor qo‘shish</h2>

      <input
        type="text"
        placeholder="Ismi"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <input
        type="number"
        placeholder="Yoshi"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        className="w-full p-2 border rounded mb-3"
      />

      <input
        type="text"
        placeholder="Kasalligi"
        value={illness}
        onChange={(e) => setIllness(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />

      <select
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      >
        <option value="">Doktorni tanlang</option>
        {doctors.map((doc) => (
          <option key={doc.id} value={doc.id}>
            {doc.name} ({doc.specialization})
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Saqlash
      </button>
    </form>
  );
}

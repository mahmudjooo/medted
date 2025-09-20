import { useState } from "react";
import axios from "axios";

export default function AddDoctor({ onAdded }: { onAdded: () => void }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://api.example.com/doctors", {
        name,
        avatar,
        specialization,
        bio,
      });
      alert("Doctor qo‘shildi!");
      onAdded();
      setName("");
      setAvatar("");
      setSpecialization("");
      setBio("");
    } catch (err) {
      alert("Xatolik yuz berdi!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-xl max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Doctor qo‘shish</h2>
      <input
        type="text"
        placeholder="Ismi"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <input
        type="text"
        placeholder="Mutaxassisligi"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Saqlash
      </button>
    </form>
  );
}

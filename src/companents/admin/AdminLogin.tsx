import { useState } from "react";

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // ⚠️ Real loyihada backend orqali tekshirish kerak
    if (username === "admin" && password === "12345") {
      onLogin();
    } else {
      alert("Login yoki parol xato!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg p-6 rounded-xl w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
        <input
          type="text"
          placeholder="Login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Kirish
        </button>
      </form>
    </div>
  );
}

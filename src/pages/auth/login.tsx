import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";

// Statik foydalanuvchilar ro'yxati (ma'lumotlar bazasidan olinadi)
const users = [
  {
    id: "admin",
    email: "admin@example.com",
    password: "admin123",
    role: "admin", // Admin roli
  },
  {
    id: "doctor1",
    email: "admin@example.com",
    password: "admin1234",
    role: "doctor", // Doktor roli
  },
  {
    id: "reception1",
    email: "admin@example.com",
    password: "admin12345",
    role: "reception ", // Administrator roli
  },
];

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  // Foydalanuvchi loginini tekshirish
  const handleLogin = () => {
    // Foydalanuvchilar ro'yxatini tekshiramiz
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setUser(foundUser); // User ma'lumotlarini saqlash
      // Rollarga qarab foydalanuvchini mos sahifaga yo'naltiramiz
      if (foundUser.role === "admin") {
        navigate("/admin"); // Admin panelga yo'naltirish
      } else if (foundUser.role === "doctor") {
        navigate("/doctor"); // Doctor panelga yo'naltirish
      } else if (foundUser.role === "reception ") {
        navigate("/reception"); // Administrator panelga yo'naltirish
      }
    } else {
      alert("Email yoki parol noto‘g‘ri!");
    }
  };

  return (
    <Box sx={{ width: 300, mx: "auto", mt: 5 }}>
      <Typography variant="h5">Sign In</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;

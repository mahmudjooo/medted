// src/pages/auth/login.tsx
import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, TextField, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

const users = [
  {
    id: "admin",
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "doctor1",
    email: "doctor1@example.com",
    password: "doc12345",
    role: "doctor",
  },
  {
    id: "reception1",
    email: "reception1@example.com",
    password: "rec12345",
    role: "reception",
  },
];

const BackgroundBox = styled(Box)(() => ({
  backgroundImage:
    "url('https://img.freepik.com/free-vector/blue-medical-background-with-hexagonal-shapes_1017-19366.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setUser(foundUser);

      switch (foundUser.role) {
        case "admin":
          navigate("/admin");
          break;
        case "doctor":
          navigate("/doctors");
          break;
        case "reception":
          navigate("/reception");
          break;
        default:
          navigate("/");
      }
    } else {
      alert("❌ Email yoki parol noto‘g‘ri!");
    }
  };

  return (
    <BackgroundBox>
      <Paper
        elevation={8}
        sx={{
          width: 400,
          p: 5,
          borderRadius: 4,
          bgcolor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <Typography variant="h4" color="primary" fontWeight="bold">
            MedTed Healthcare Portal
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Login orqali tizimga kiring
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Parol"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{
              py: 1.5,
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            Login
          </Button>
        </motion.div>
      </Paper>
    </BackgroundBox>
  );
};

export default LoginPage;

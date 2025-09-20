import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, TextField } from "@mui/material";
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
    password: "admin1234",
    role: "doctor",
  },
  {
    id: "reception1",
    email: "reception1@example.com",
    password: "admin12345",
    role: "reception",
  },
];

const BackgroundBox = styled(Box)(() => ({
  backgroundImage:
    "url('https://t3.ftcdn.net/jpg/10/45/45/14/360_F_1045451449_6DF9ln8DYlJkb2uhqf7Qdo13vLuNMNm3.jpg')",
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

      // roliga qarab navigatsiya
      switch (foundUser.role) {
        case "admin":
          navigate("/admin");
          break;
        case "doctor":
          navigate("/doctor");
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
      <Box
        sx={{
          width: 400,
          backdropFilter: "blur(8px)",
          background: "rgba(255,255,255,0.9)",
          padding: 5,
          borderRadius: 3,
          boxShadow: 10,
        }}
      >
        {/* Logo & Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <img
            src="https://example.com/logo.png"
            alt="MedTed Logo"
            style={{ width: 120, marginBottom: 15 }}
          />
          <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
            MedTed Healthcare Portal
          </Typography>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
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
            label="Password"
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
      </Box>
    </BackgroundBox>
  );
};

export default LoginPage;

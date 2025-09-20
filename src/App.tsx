import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/auth/login";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";

// Panel va Componentlar
import DoctorList from "./companents/doctor/DoctorList";
import DoctorProfile from "./companents/doctor/DoctorProfile";
import AdminPanel from "./companents/admin/AdminPanel";
import ReceptionPanel from "./companents/resiption/ReceptionPanel";
import AdminDashboard from "./companents/admin/AdminDashboard";
import Dashboard from "./pages/Dashboard";

const theme = createTheme();

const App: React.FC = () => {
  const [doctors, setDoctors] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://api.example.com/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error("Doctors API error:", err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* Home sahifasi */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Doctors */}
        <Route path="/doctors" element={<DoctorList doctors={doctors} />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* 👩‍⚕️ Doctor va Reception foydalanuvchilari uchun umumiy dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Reception */}
        <Route path="/reception" element={<ReceptionPanel />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

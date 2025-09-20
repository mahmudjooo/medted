import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/auth/login";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import MainLayout from "./companents/admin/MainLayout";
import Patients from "./pages/admin/Patients";
import Appointments from "./pages/admin/Appointments";
import Users from "./pages/admin/Users";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";
import Dashboard from "./pages/admin/dashboard";
import DoctorLayout from "./companents/doctor/DoctorLayout";
import DoctorDashboard from "./pages/doctor/Dashboard";
import MyPatients from "./pages/doctor/MyPatients";
import Profile from "./pages/doctor/Profile";
import Records from "./pages/doctor/Records";
import DoctorAppointments from "./pages/doctor/Appointments";
import ReceptionLayout from "./companents/reception/ReceptionLayout";
import ReceptionDashboard from "./pages/reception/Dashboard";
import ReceptionPatients from "./pages/reception/Patients";
import ReceptionAppointments from "./pages/reception/Appointments";
import ReceptionBilling from "./pages/reception/Billing";
import ReceptionProfile from "./pages/reception/Profile";
import Schedule from "./pages/reception/Schedule";

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        /*AminPanel*/
        <Route path="/admin" element={<MainLayout />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/patients" element={<Patients />} />
        <Route path="/admin/appointments" element={<Appointments />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />
        /*DoctorPanel*/
        <Route path="/doctor" element={<DoctorLayout />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/my-patients" element={<MyPatients />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/doctor/records" element={<Records />} />
        <Route path="/doctor/profile" element={<Profile />} />
        /*ReceptionPanel*/
        <Route path="/reception" element={<ReceptionLayout />} />
        <Route path="/reception/dashboard" element={<ReceptionDashboard />} />
        <Route path="/reception/patients" element={<ReceptionPatients />} />
        <Route
          path="/reception/appointments"
          element={<ReceptionAppointments />}
        />
        <Route path="/reception/schedule" element={<Schedule />} />
        <Route path="/reception/billing" element={<ReceptionBilling />} />
        <Route path="/reception/profile" element={<ReceptionProfile />} />
        /*HomePage*/
        <Route path="/" element={<Home />} />
        /*LoginPage DefaultDesign*/
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

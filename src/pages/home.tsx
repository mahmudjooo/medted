import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import LoginPage from "./auth/login";
import { useAuthStore } from "../store/authStore";

const Home: React.FC = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  // Sayt ochilganda foydalanuvchi kirganmi yoki yo'qmi tekshiramiz
  useEffect(() => {
    if (!user) {
      navigate("/login"); // Agar foydalanuvchi tizimga kirgan bo'lmasa, login sahifasiga yo'naltiramiz
    } else {
      if (user.role === "admin") {
        navigate("/admin"); // Agar admin bo'lsa, admin panelga yo'naltiramiz
      } else if (user.role === "doctor") {
        navigate("/doctor"); // Agar doctor bo'lsa, doctor panelga yo'naltiramiz
      } else if (user.role === "reception ") {
        navigate("/reception "); // Agar administrator bo'lsa, administrator panelga yo'naltiramiz
      }
    }
  }, [user, navigate]);

  // Agar foydalanuvchi tizimga kirgan bo'lsa, Sidebar ko'rinadi
  if (user) {
    return (
      <>
        <h1>Welcome, {user.email}!</h1>
      </>
    );
  }

  // Agar foydalanuvchi tizimga kirmagan bo'lsa, LoginPage ko'rinadi
  return <LoginPage />;
};

export default Home;

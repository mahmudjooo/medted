import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Home: React.FC = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      if (user.role === "admin") {
        navigate("/admin");
      } else if (user.role === "doctor") {
        navigate("/doctor");
      } else if (user.role === "reception") {
        navigate("/reception");
      }
    }
  }, [user, navigate]);

  // Bu yerda hech narsa ko'rsatmasak ham bo‘ladi,
  // chunki navigate avtomatik boshqa sahifaga yo‘naltiradi.
  return null;
};

export default Home;

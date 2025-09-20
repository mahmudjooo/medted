// src/layouts/ReceptionLayout.tsx
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function ReceptionLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        {/* Header */}
        <Header />

        {/* Pages */}
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

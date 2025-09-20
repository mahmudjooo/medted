import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DoctorLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header title="Doctor Panel" />
      <Sidebar role="doctor" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

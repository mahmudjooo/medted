"use client";

import {
  Dashboard,
  People,
  EventNote,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/admin/dashboard" },
  { text: "Patients", icon: <People />, path: "/admin/patients" },
  { text: "Appointments", icon: <EventNote />, path: "/admin/appointments" },
  { text: "Users", icon: <People />, path: "/admin/users" },
  { text: "Settings", icon: <Settings />, path: "/admin/settings" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1e293b", // dark blue-gray
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        {/* Logo */}
        <Box>
          <Toolbar
            sx={{
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              PatientCare
            </Typography>
          </Toolbar>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

          {/* Menu */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  backgroundColor:
                    location.pathname.startsWith(item.path) &&
                    "rgba(255,255,255,0.15)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.25)",
                    transform: "translateX(4px)",
                  },
                  transition: "all 0.3s ease",
                  borderRadius: 1,
                  mx: 1,
                  my: 0.5,
                }}
              >
                <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Footer */}
        <Box sx={{ p: 2 }}>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 1 }} />
          <Button
            variant="outlined"
            fullWidth
            startIcon={<ExitToApp />}
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.3)",
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}

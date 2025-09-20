// src/layouts/Sidebar.tsx
"use client";

import {
  Dashboard,
  CalendarToday,
  People,
  Receipt,
  Event,
  AccountCircle,
  ExitToApp,
} from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/reception/dashboard" },
  { text: "Patients", icon: <People />, path: "/reception/patients" },
  { text: "Appointments", icon: <Event />, path: "/reception/appointments" },
  { text: "Schedule", icon: <CalendarToday />, path: "/reception/schedule" },
  { text: "Billing", icon: <Receipt />, path: "/reception/billing" },
  { text: "Profile", icon: <AccountCircle />, path: "/reception/profile" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1e293b", // dark bg
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box>
        {/* Logo / Title */}
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
            <ListItem key={item.text} disablePadding sx={{ mx: 1, my: 0.5 }}>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  borderRadius: 1,
                  backgroundColor:
                    location.pathname === item.path && "rgba(255,255,255,0.15)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.25)",
                    transform: "translateX(4px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
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
  );
}

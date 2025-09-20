import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Divider,
  Paper,
  Button,
} from "@mui/material";
import { Menu, Group, BarChart, PersonAdd } from "@mui/icons-material";
import AdminPanel from "./AdminPanel";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("users");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Statistika ma'lumotlari
  const data = [
    { name: "Doctors", value: 6 },
    { name: "Reception", value: 3 },
    { name: "Patients", value: 25 },
  ];
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    // 🔑 Agar token ishlatayotgan bo‘lsangiz localStorage.removeItem("token") qilsa ham bo‘ladi
    navigate("/"); // Login sahifasiga qaytaradi
  };
  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" color="primary" fontWeight="bold">
          Admin Panel
        </Typography>
      </Toolbar>

      <Divider />
      <Button
        color="inherit"
        onClick={handleLogout}
        sx={{ fontWeight: "bold" }}
      >
        🚪 Chiqish
      </Button>
      <List>
        <ListItem
          button
          selected={activeTab === "users"}
          onClick={() => setActiveTab("users")}
        >
          <ListItemIcon>
            <PersonAdd color={activeTab === "users" ? "primary" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Add Doctor / Reception" />
        </ListItem>

        <ListItem
          button
          selected={activeTab === "stats"}
          onClick={() => setActiveTab("stats")}
        >
          <ListItemIcon>
            <BarChart color={activeTab === "stats" ? "primary" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Diagramlar" />
        </ListItem>

        <ListItem
          button
          selected={activeTab === "all"}
          onClick={() => setActiveTab("all")}
        >
          <ListItemIcon>
            <Group color={activeTab === "all" ? "primary" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Barcha foydalanuvchilar" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar /> {/* AppBar bilan joy ochish */}
        {activeTab === "users" && <AdminPanel />}
        {activeTab === "stats" && (
          <Paper sx={{ p: 4, borderRadius: 4, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom>
              📊 Diagrammalar
            </Typography>
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        )}
        {activeTab === "all" && (
          <Paper sx={{ p: 4, borderRadius: 4, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom>
              👥 Barcha foydalanuvchilar
            </Typography>
            <Typography color="text.secondary">
              Bu bo‘limda keyinchalik barcha userlar ro‘yxati va boshqaruv
              imkoniyatlari bo‘ladi.
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
}

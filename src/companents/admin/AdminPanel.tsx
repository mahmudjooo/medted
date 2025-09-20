import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Grid,
  Avatar,
  MenuItem,
  Paper,
} from "@mui/material";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "doctor" | "reception";
  avatar?: string;
  specialization?: string;
  bio?: string;
}

export default function AdminPanel() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "doctor",
    specialization: "",
    bio: "",
  });

  const loadUsers = async () => {
    const res = await axios.get("https://api.example.com/users");
    setUsers(res.data);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("https://api.example.com/users", form);
    setForm({
      name: "",
      email: "",
      password: "",
      role: "doctor",
      specialization: "",
      bio: "",
    });
    loadUsers();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Box sx={{ p: 4, minHeight: "100vh", bgcolor: "grey.100" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="primary"
        textAlign="center"
        mb={4}
      >
        👨‍⚕️ Admin Panel
      </Typography>

      {/* Add User Form */}
      <Card sx={{ maxWidth: 600, mx: "auto", mb: 6, boxShadow: 4 }}>
        <CardHeader
          title="➕ Yangi foydalanuvchi qo‘shish"
          titleTypographyProps={{ variant: "h6", textAlign: "center" }}
        />
        <CardContent>
          <Box
            component="form"
            onSubmit={handleAdd}
            sx={{ display: "grid", gap: 2 }}
          >
            <TextField
              label="Ism"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Parol"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              fullWidth
              variant="outlined"
            />

            <TextField
              label="Rol"
              select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              fullWidth
              variant="outlined"
            >
              <MenuItem value="doctor">Doctor</MenuItem>
              <MenuItem value="reception">Reception</MenuItem>
            </TextField>

            {form.role === "doctor" && (
              <>
                <TextField
                  label="Mutaxassisligi"
                  value={form.specialization}
                  onChange={(e) =>
                    setForm({ ...form, specialization: e.target.value })
                  }
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  label="Bio"
                  multiline
                  rows={3}
                  value={form.bio}
                  onChange={(e) => setForm({ ...form, bio: e.target.value })}
                  fullWidth
                  variant="outlined"
                />
              </>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, fontWeight: "bold" }}
            >
              ➕ Qo‘shish
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Users List */}
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
        👥 Foydalanuvchilar
      </Typography>

      <Grid container spacing={3}>
        {users.map((u) => (
          <Grid item xs={12} sm={6} md={4} key={u.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar
                  src={
                    u.avatar ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    boxShadow: 2,
                  }}
                />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {u.name}
                </Typography>
                <Typography color="text.secondary" textTransform="capitalize">
                  {u.role}
                </Typography>
                {u.role === "doctor" && (
                  <Box mt={1}>
                    <Typography variant="body2" color="text.primary">
                      {u.specialization}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontStyle="italic"
                    >
                      {u.bio}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

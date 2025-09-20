// src/pages/profile/Profile.tsx
import { Box, Typography, Avatar, Paper } from "@mui/material";

export default function ReceptionProfile() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Reception Profile
      </Typography>
      <Paper sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar sx={{ width: 64, height: 64 }}>R</Avatar>
        <Box>
          <Typography variant="h6">Gulbahor Islomova</Typography>
          <Typography variant="body2">Receptionist</Typography>
          <Typography variant="body2">Phone: +99890 123 45 67</Typography>
        </Box>
      </Paper>
    </Box>
  );
}

import { Paper, Typography, Avatar, Box } from "@mui/material";

export default function Profile() {
  return (
    <Paper sx={{ p: 3, textAlign: "center" }}>
      <Avatar
        sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
        src="https://i.pravatar.cc/150?img=3"
      />
      <Typography variant="h5">Dr. Emily Watson</Typography>
      <Typography color="text.secondary">Cardiologist</Typography>
      <Box mt={2}>
        <Typography>Email: emily.watson@hospital.com</Typography>
        <Typography>Phone: +998 90 123 45 67</Typography>
      </Box>
    </Paper>
  );
}

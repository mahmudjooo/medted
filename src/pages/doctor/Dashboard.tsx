import { Grid, Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", patients: 30 },
  { month: "Feb", patients: 45 },
  { month: "Mar", patients: 50 },
  { month: "Apr", patients: 70 },
];

export default function DoctorDashboard() {
  return (
    <Grid container spacing={3}>
      {/* Statistik kartochkalar */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Patients</Typography>
          <Typography variant="h4">120</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Appointments</Typography>
          <Typography variant="h4">15</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Pending</Typography>
          <Typography variant="h4">4</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Completed</Typography>
          <Typography variant="h4">96</Typography>
        </Paper>
      </Grid>

      {/* Grafik */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Patients Growth</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="patients" stroke="#1976d2" />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}

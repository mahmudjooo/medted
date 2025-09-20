import { Grid, Paper, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const dataPie = [
  { name: "Patients", value: 400 },
  { name: "Doctors", value: 100 },
  { name: "Appointments", value: 300 },
];

const dataBar = [
  { month: "Jan", patients: 30 },
  { month: "Feb", patients: 50 },
  { month: "Mar", patients: 45 },
];

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Patients by Category</Typography>
          <PieChart width={300} height={250}>
            <Pie
              data={dataPie}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              <Cell fill="#8884d8" />
              <Cell fill="#82ca9d" />
              <Cell fill="#ffc658" />
            </Pie>
          </PieChart>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Monthly Patients</Typography>
          <BarChart width={300} height={250} data={dataBar}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="patients" fill="#8884d8" />
          </BarChart>
        </Paper>
      </Grid>
    </Grid>
  );
}

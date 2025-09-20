// src/pages/dashboard/Dashboard.tsx
import { Grid, Paper, Typography } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Appointments", value: 24 },
  { name: "New Patients", value: 10 },
  { name: "Billing", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ReceptionDashboard() {
  return (
    <Grid container spacing={3}>
      {/* Statistic Cards */}
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Today Appointments</Typography>
          <Typography variant="h4">24</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">New Patients</Typography>
          <Typography variant="h4">10</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Payments</Typography>
          <Typography variant="h4">$1250</Typography>
        </Paper>
      </Grid>

      {/* Pie Chart */}
      <Grid item xs={12}>
        <Paper sx={{ p: 3, height: 300 }}>
          <Typography variant="h6">Overview</Typography>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}} fill={COLORS[index % COLORS.length]`}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}

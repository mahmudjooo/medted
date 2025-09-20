// src/pages/appointments/Appointments.tsx
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function ReceptionAppointments() {
  const appointments = [
    { id: 1, patient: "Ali Valiyev", doctor: "Dr. Akmalov", time: "10:00" },
    {
      id: 2,
      patient: "Dilnoza Karimova",
      doctor: "Dr. Rashidova",
      time: "11:30",
    },
    { id: 3, patient: "Javlon Bekov", doctor: "Dr. Hasanov", time: "13:00" },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Appointments
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Patient</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((a) => (
              <TableRow key={a.id}>
                <TableCell>{a.id}</TableCell>
                <TableCell>{a.patient}</TableCell>
                <TableCell>{a.doctor}</TableCell>
                <TableCell>{a.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

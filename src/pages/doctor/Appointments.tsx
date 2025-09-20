import { Paper, List, ListItem, ListItemText } from "@mui/material";

const appointments = [
  { id: 1, patient: "John Doe", date: "2025-09-20", time: "10:00 AM" },
  { id: 2, patient: "Jane Smith", date: "2025-09-21", time: "2:00 PM" },
];

export default function DoctorAppointments() {
  return (
    <Paper sx={{ p: 2 }}>
      <List>
        {appointments.map((a) => (
          <ListItem key={a.id}>
            <ListItemText
              primary={`${a.patient} - ${a.time}`}
              secondary={a.date}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

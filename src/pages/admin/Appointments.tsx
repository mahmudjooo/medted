import { List, ListItem, ListItemText, Paper } from "@mui/material";

const appointments = [
  { id: 1, patient: "John Doe", date: "2025-09-20", doctor: "Dr. Smith" },
  { id: 2, patient: "Jane Smith", date: "2025-09-21", doctor: "Dr. Adams" },
];

export default function Appointments() {
  return (
    <Paper sx={{ p: 3 }}>
      <List>
        {appointments.map((a) => (
          <ListItem key={a.id}>
            <ListItemText
              primary={`${a.patient} — ${a.doctor}`}
              secondary={a.date}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

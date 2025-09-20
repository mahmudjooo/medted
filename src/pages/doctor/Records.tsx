import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const records = [
  { id: 1, patient: "John Doe", note: "Prescribed antibiotics for flu." },
  { id: 2, patient: "Jane Smith", note: "Regular check-up. Stable condition." },
];

export default function Records() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Medical Records</Typography>
      <List>
        {records.map((r) => (
          <ListItem key={r.id}>
            <ListItemText primary={r.patient} secondary={r.note} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

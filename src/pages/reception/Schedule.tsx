// src/pages/schedule/Schedule.tsx
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Schedule() {
  const schedule = [
    { doctor: "Dr. Akmalov", day: "Monday", time: "09:00 - 15:00" },
    { doctor: "Dr. Rashidova", day: "Tuesday", time: "10:00 - 16:00" },
    { doctor: "Dr. Hasanov", day: "Wednesday", time: "08:00 - 14:00" },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Doctors Schedule
      </Typography>
      <Paper>
        <List>
          {schedule.map((s, i) => (
            <ListItem key={i}>
              <ListItemText
                primary={`${s.doctor} (${s.day})`}
                secondary={`Time: ${s.time}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

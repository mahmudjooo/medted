import { Typography, Paper, Switch, FormControlLabel } from "@mui/material";

export default function Settings() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Settings</Typography>
      <FormControlLabel control={<Switch />} label="Enable Notifications" />
    </Paper>
  );
}

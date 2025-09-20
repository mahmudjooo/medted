// src/pages/patients/Patients.tsx
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

export default function ReceptionPatients() {
  const [open, setOpen] = useState(false);
  const [patients, setPatients] = useState([
    { id: 1, name: "Ali Valiyev", phone: "+99890 123 45 67" },
    { id: 2, name: "Dilnoza Karimova", phone: "+99891 765 43 21" },
  ]);
  const [newPatient, setNewPatient] = useState({ name: "", phone: "" });

  const handleAddPatient = () => {
    setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
    setNewPatient({ name: "", phone: "" });
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Patients
      </Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + Add Patient
      </Button>

      {/* Patients Table */}
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Patient Modal */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Patient</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={newPatient.name}
            onChange={(e) =>
              setNewPatient({ ...newPatient, name: e.target.value })
            }
          />
          <TextField
            label="Phone"
            fullWidth
            margin="dense"
            value={newPatient.phone}
            onChange={(e) =>
              setNewPatient({ ...newPatient, phone: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddPatient} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

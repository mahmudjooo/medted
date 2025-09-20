import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const patients = [
  { id: 1, name: "John Doe", age: 30, diagnosis: "Flu" },
  { id: 2, name: "Jane Smith", age: 45, diagnosis: "Diabetes" },
];

export default function MyPatients() {
  return (
    <Paper sx={{ p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Diagnosis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.age}</TableCell>
              <TableCell>{p.diagnosis}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

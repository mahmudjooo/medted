// src/pages/billing/Billing.tsx
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function ReceptionBilling() {
  const bills = [
    { id: 1, patient: "Ali Valiyev", amount: 120, status: "Paid" },
    { id: 2, patient: "Dilnoza Karimova", amount: 200, status: "Pending" },
    { id: 3, patient: "Javlon Bekov", amount: 150, status: "Paid" },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Billing
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Patient</TableCell>
              <TableCell>Amount ($)</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map((b) => (
              <TableRow key={b.id}>
                <TableCell>{b.id}</TableCell>
                <TableCell>{b.patient}</TableCell>
                <TableCell>{b.amount}</TableCell>
                <TableCell>{b.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

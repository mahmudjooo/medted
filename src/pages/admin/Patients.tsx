import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, name: "John Doe", age: 30, diagnosis: "Flu" },
  { id: 2, name: "Jane Smith", age: 25, diagnosis: "Asthma" },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 100 },
  { field: "diagnosis", headerName: "Diagnosis", width: 150 },
];

export default function Patients() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}

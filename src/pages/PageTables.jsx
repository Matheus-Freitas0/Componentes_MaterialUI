import Typography from "@mui/material/Typography";
import Table1 from "../components/table/Table1";
import Table2 from "../components/table/Table2";

export default function PageTables() {
  return (
    <div>
      <Typography
        variant="h3"
        color="initial"
        sx={{ mb: 3, fontStyle: "italic", fontWeight: "700" }}
      >
        Page Tables
      </Typography>
      <Table1 />
      <Table2 />
    </div>
  );
}
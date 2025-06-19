import { Button, ButtonGroup } from "@mui/material";

export default function ButtonGroup1() {
  return (
    <ButtonGroup variant="contained" color="primary" sx={{ mt: 2 }}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="error">Error</Button>
      <Button color="info">Info</Button>
      <Button color="warning">Warning</Button>
    </ButtonGroup>
  );
}

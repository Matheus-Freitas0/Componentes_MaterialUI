import { SendOutlined } from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";

export default function ButtonGroup3() {
  return (
    <ButtonGroup variant="contained" color="primary" sx={{ mt: 2, gap: 1}}>
      <Button startIcon={<SendOutlined />}>Enviar</Button>
      <Button endIcon={<SendOutlined />}>Enviar</Button>
    </ButtonGroup>
  );
}

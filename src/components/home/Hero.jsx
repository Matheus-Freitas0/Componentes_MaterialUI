import { Button, ButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="div-home">
        <h1 className="titulo-home">Componentes Material-UI</h1>
        <h3 className="subtitulo-home">Selecione o componente desejado</h3>
        <ButtonGroup variant="contained" color="success">
          <Button component={Link} to="/tables">
            Tables
          </Button>
          <Button component={Link} to="/buttons">
            Buttons
          </Button>
          <Button>teste</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

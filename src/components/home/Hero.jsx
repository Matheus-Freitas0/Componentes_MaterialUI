import { Button } from "@mui/material";

export default function Hero() {
  return (
    <>
      <div>
        <h1>Selecione o componente desejado</h1>
        <div className="div-buttons">
            <Button variant="contained" color="primary">Tables</Button>
            <Button variant="contained" color="secondary">Buttons</Button>
        </div>
      </div>
    </>
  );
}

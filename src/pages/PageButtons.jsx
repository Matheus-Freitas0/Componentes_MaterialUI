import Button1 from "../components/buttons/Button1";
import Typography from "@mui/material/Typography";
import Button2 from "../components/buttons/Button2";
import Button3 from "../components/buttons/Button3";
import ButtonGroup1 from "../components/buttons/ButtonGroup1";
import ButtonGroup2 from "../components/buttons/ButtonGroup2";
import IconButton1 from "../components/buttons/IconButton1";
import FloatingButtons1 from "../components/buttons/FloatingButtons1";
import ButtonGroup3 from "../components/buttons/ButtonGroup3";
import LoadingButton1 from "../components/buttons/LoadingButton1";

export default function PageButtons() {
  return (
    <div className="buttons-page">
      <Typography
        variant="h1"
        color="initial"
        sx={{ mb: 4, fontFamily: "Merienda", fontSize: "4rem" }}
      >
        Page buttons
      </Typography>
      <Typography
        variant="h3"
        color="initial"
        sx={{ mb: 2, fontFamily: "Merienda", fontSize: "2rem" }}
      >
        Common buttons
      </Typography>

      <Button1 />
      <Button2 />
      <Button3 />

      <Typography
        variant="h3"
        color="initial"
        sx={{ mt: 2, fontFamily: "Merienda", fontSize: "2rem" }}
      >
        Buttons gruop
      </Typography>
      <ButtonGroup1 />
      <ButtonGroup2 />
      <ButtonGroup3 />

      <Typography
        variant="h3"
        color="initial"
        sx={{ mt: 2, fontFamily: "Merienda", fontSize: "2rem" }}
      >
        Icon buttons
      </Typography>
      <IconButton1 />

      <Typography
        variant="h3"
        color="initial"
        sx={{ mb: 2, fontFamily: "Merienda", fontSize: "2rem" }}
      >
        Floating Buttons 
      </Typography>
      <FloatingButtons1 />

      <Typography
        variant="h3"
        color="initial"
        sx={{ mb: 2, fontFamily: "Merienda", fontSize: "2rem" }}
      >
        Loading buttons
      </Typography>
      <LoadingButton1 />
    </div>
  );
}

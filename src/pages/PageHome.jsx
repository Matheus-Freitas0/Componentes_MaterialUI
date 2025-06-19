import Hero from "../components/home/hero";
import Typography from '@mui/material/Typography'

export default function PageHome() {
  return (
    <>
      <Typography
        variant="h3"
        color="initial"
        sx={{ mb: 3, fontStyle: "italic", fontWeight: "700" }}
      >
        Page Hero
      </Typography>
      <Hero />
    </>
  );
}

import { Button, ButtonGroup } from "@mui/material";

export default function ButtonGroup2() {
    return (
        <ButtonGroup variant="contained" color="primary" sx={{ mt: 2 }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
        </ButtonGroup>
    );
}
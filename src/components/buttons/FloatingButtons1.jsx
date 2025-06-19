
import { Fab, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingButtons1() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Fab color="primary">
        <AddIcon />
      </Fab>

      <Fab variant="extended" color="secondary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navegar
      </Fab>
    </Box>
  );
}
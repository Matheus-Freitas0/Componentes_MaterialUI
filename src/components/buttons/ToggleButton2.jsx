import React, { useState } from 'react';
import { FormatAlignCenter, FormatAlignLeft, FormatAlignRight } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function ToggleButton2() {
  const [alignment, setAlignment] = useState('left');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeft />
      </ToggleButton>
      <ToggleButton value="center" aria-label="center aligned">
        <FormatAlignCenter />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRight />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
        width: '100%',
      }}
    >
      <TextField
        variant="filled"
        label="Search for a character"
        fullWidth
      />
    </Box>
  );
};

export default SearchBar;

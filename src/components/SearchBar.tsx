'use client';

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

import { searchTextSelector, setSearchPage, setSearchText } from '@/redux/characterSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | undefined>();
  const searchText = useSelector(searchTextSelector);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout!);
    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        dispatch(setSearchText(e.target.value));
        dispatch(setSearchPage(1));
      }, 1000)
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
        width: '100%'
      }}
    >
      <TextField variant="filled" label="Search character(s)" fullWidth onChange={handleSearchChange} defaultValue={searchText} />
    </Box>
  );
};

export default SearchBar;

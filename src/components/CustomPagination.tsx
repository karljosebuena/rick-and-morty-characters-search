import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationOutlinedProps {
  count: number
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function PaginationOutlined({ count, page, handleChange }: PaginationOutlinedProps) {
  console.log('PaginationOutlined', page, count);

  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
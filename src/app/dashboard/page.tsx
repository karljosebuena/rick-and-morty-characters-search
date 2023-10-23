'use client'

import CustomPagination from '@/components/CustomPagination'
import MediaCard from '@/components/MediaCard'
import SearchBar from '@/components/SearchBar'
import { Character, GetCharactersQuery, useGetCharactersQuery } from '@/generated/graphql'
import { Box } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { searchTextSelector } from '@/redux/characterSlice'
import { useRouter } from 'next/navigation'
import SimpleBackdrop from '@/components/Backdrop'

interface GetCharactersQueryWithInfo extends GetCharactersQuery {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
}

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1', 10);
  const [currentPage, setCurrentPage] = useState(page);

  // TODO: Fix problem with search when result is 1 page only and current page is > 1
  const searchText = useSelector(searchTextSelector);
  if (searchText) {
    router.push(`dashboard?page=${1}`, undefined);
  }

  const [result] = useGetCharactersQuery({
    variables: {
      page: currentPage,
      name: searchText
    }
  });
  const { data, fetching, error } = result as unknown as {
    data: GetCharactersQueryWithInfo;
    fetching: boolean;
    error: any;
  };

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`dashboard?page=${value}`, undefined);
    setCurrentPage(value);
  }

  if (fetching) return <SimpleBackdrop open={fetching} />
  if (error) return <div style={{ padding: '2rem 1rem' }}>Oh no... {(error as Error).message}</div>;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '2rem 1rem'
      }}
    >
      <SearchBar />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gridGap: '1rem',
          justifyItems: 'stretch',
          width: '100%',
          height: '100%',
          padding: '1rem',
        }}
      >
        {data?.characters?.results?.map((character, index) => (
          <div key={`${character?.name}-${index}`}>
            <MediaCard character={character as Character} />
          </div>
        ))}
      </div>

      <CustomPagination
        count={data?.characters?.info?.pages ?? 1}
        page={currentPage}
        handleChange={handlePaginationChange}
      />
    </Box>
  )
}

export default page;

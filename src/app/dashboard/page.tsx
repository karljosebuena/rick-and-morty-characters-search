'use client'

import CustomPagination from '@/components/CustomPagination'
import MediaCard from '@/components/MediaCard'
import SearchBar from '@/components/SearchBar'
import { Character, FetchCharactersQuery, useFetchCharactersQuery } from '@/generated/graphql'
import { Box } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import React, { use, useCallback, useEffect, useMemo, useState } from 'react'
import { useQuery } from 'urql'

interface FetchCharactersQueryWithInfo extends FetchCharactersQuery {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
}

const page = () => {
  const searchParams = useSearchParams();
  const pageParam = useMemo(() => {
    return parseInt(searchParams.get('page') ?? '1', 10);
  }, [searchParams]);

  const [currentPage, setCurrentPage] = useState(pageParam);
  const [pageCount, setPageCount] = useState(0);

  const [result] = useFetchCharactersQuery(
    {
      variables: {
        page: currentPage,
      },
    }
  );
  const { data, fetching, error } = result as unknown as {
    data: FetchCharactersQueryWithInfo;
    fetching: boolean;
    error: any;
  };

  console.log('data', data);

  const pages = useMemo(() => {
    return data?.characters?.info?.pages ?? 1;
  }, [data?.characters?.info?.pages]);

  useEffect(() => {
    setPageCount(pages ?? 1);
  }, [pages]);


  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Oh no... {(error as Error).message}</div>;

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
        count={pageCount}
        page={currentPage}
        handleChange={(event, value) => {
          setCurrentPage(value);
        }}
      />
    </Box>
  )
}

export default page
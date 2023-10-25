'use client';

import { Box } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { Character, GetCharactersQuery, useGetCharactersQuery } from '@/generated/graphql';

import CustomPagination from '@/components/CustomPagination';
import MediaCard from '@/components/MediaCard';
import SearchBar from '@/components/SearchBar';
import { searchTextSelector } from '@/redux/characterSlice';
import SimpleBackdrop from '@/components/Backdrop';
import BasicModal from '@/components/BasicModal';

interface GetCharactersQueryWithInfo extends GetCharactersQuery {
  info: {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
  };
}

const CustomDashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') ?? '1', 10);
  const [currentPage, setCurrentPage] = useState(page);

  const searchText = useSelector(searchTextSelector);
  useEffect(() => {
    if (searchText) {
      setCurrentPage(1);
      router.push(`dashboard?page=${1}`, undefined);
    }
  }, [router, searchText])

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
  };

  if (fetching) return <SimpleBackdrop open={fetching} />;
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
      <CustomPagination count={data?.characters?.info?.pages ?? 1} page={currentPage} handleChange={handlePaginationChange} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gridGap: '1rem',
          justifyItems: 'stretch',
          width: '100%',
          height: '100%',
          padding: '1rem'
        }}
      >
        {data?.characters?.results?.map((character, index) => (
          <div key={`${character?.name}-${index}`}>
            <MediaCard character={character as Character} />
          </div>
        ))}
      </div>
      <CustomPagination count={data?.characters?.info?.pages ?? 1} page={currentPage} handleChange={handlePaginationChange} />
      <BasicModal />
    </Box>
  );
};

export default CustomDashboard;

'use client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Character } from '@/generated/graphql';
import { CircularProgress, Tooltip } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCharacterData, setGeneratedCharacterInfo, setGeneratingInfoFromOpenAi } from '@/redux/characterSlice';

interface MediaCardProps {
  character: Character;
}

interface StatusColor {
  [key: string]: string;
}

const statusColor: StatusColor = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'grey'
};

export default function MediaCard({ character }: MediaCardProps) {
  const [onSmallScreen, setOnSmallScreen] = useState(false);
  window.addEventListener('resize', () => {
    setOnSmallScreen(window.innerWidth < 768);
  });

  const dispatch = useDispatch();
  const [generatingCharacterInfo, setGeneratingCharacterInfo] = useState(false);
  const generateCharacterInfo = useMutation({
    mutationFn: async () => {
      const response = await axios.post('/api/openai', {
        name: character.name,
        onSmallScreen
      });
      return response.data;
    }
  });

  const handleGenerateInfo = () => {
    setGeneratingCharacterInfo(true);
    generateCharacterInfo.mutate(undefined, {
      onSuccess: data => {
        dispatch(setCharacterData(character));
        dispatch(setGeneratedCharacterInfo(data.generatedInfo));
      },
      onError: error => {
        console.log(error);
      },
      onSettled: () => {
        setGeneratingCharacterInfo(false);
        dispatch(setGeneratingInfoFromOpenAi(true));
      }
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={character.image ?? 'https://via.placeholder.com/150'} title={character.name?.toString()} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" style={{ display: 'flex' }}>
          {character.name}
          <Tooltip title={character.status}>
            <span
              style={{
                backgroundColor: statusColor[character?.status ?? 'unknown'],
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                marginLeft: '5px'
              }}
            ></span>
          </Tooltip>
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ display: 'flex', flexDirection: 'column' }}>
          <span>Species: {character.species}</span>
          <span>Origin: {character.origin?.name}</span>
          <span>Location: {character.location?.name}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleGenerateInfo} disabled={generatingCharacterInfo}>
          {generatingCharacterInfo ? (
            <CircularProgress style={{ height: '20px', width: '20px', marginRight: '5px' }} />
          ) : (
            <span style={{ marginRight: '5px' }}>🤖</span>
          )}
          Generate Info
        </Button>
      </CardActions>
    </Card>
  );
}

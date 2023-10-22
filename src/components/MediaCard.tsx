import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Character } from '@/generated/graphql';
import { NoBackpackSharp } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

interface MediaCardProps {
  character: Character;
}

interface StatusColor {
  [key: string]: string;
}

const statusColor: StatusColor = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'grey',
}

export default function MediaCard({ character }: MediaCardProps) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={character.image ?? 'https://via.placeholder.com/150'}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div"
          style={{ display: 'flex' }}
        >
          {character.name}
          <Tooltip title={character.status}>
            <span style={{
              backgroundColor: statusColor[character?.status ?? 'unknown'],
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              marginLeft: '5px'
            }}></span>
          </Tooltip>
        </Typography>
        <Typography variant="body2" color="text.secondary"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <span>Species: {character.species}</span>
          <span>Origin: {character.origin?.name}</span>
          <span>Location: {character.location?.name}</span>
        </Typography>
      </CardContent>

      {/* TODO: Generate AI Content Favorite Scene */}
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card >
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  characterDataSelector,
  generatedCharacterInfoSelector,
  generatingInfoFromOpenAiSelector,
  setGeneratingInfoFromOpenAi
} from '@/redux/characterSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'justify' as 'justify'
};

interface BasicModalProps {
  open: boolean;
}

export default function BasicModal() {
  const dispatch = useDispatch();
  const isGeneratingInfoFromOpenAiSelector = useSelector(generatingInfoFromOpenAiSelector);
  const character = useSelector(characterDataSelector);
  const characterInfo = useSelector(generatedCharacterInfoSelector);

  return (
    <div>
      <Modal
        open={isGeneratingInfoFromOpenAiSelector}
        onClose={() => dispatch(setGeneratingInfoFromOpenAi(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {character?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {characterInfo}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

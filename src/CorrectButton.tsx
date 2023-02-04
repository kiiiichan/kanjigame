import React from 'react';
import { Button } from '@mui/material';

type CorrectButtonProps = {
  onClick : () => void;
}

export const CorrectButton: React.VFC<CorrectButtonProps> = ({onClick}) => {

  return (
  <Button
    onClick={onClick}
  >
    Correct
  </Button>
  );
};

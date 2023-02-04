import React from 'react';
import { Button } from '@mui/material';

type DismisButtonProps = {
  onClick : () => void;
}

export const DismisButton: React.VFC<DismisButtonProps> = ({onClick}) => {

  return (
  <Button
    onClick={onClick}
  >
    Dismis
  </Button>
  );
};

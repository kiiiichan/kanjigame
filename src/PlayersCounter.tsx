import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

type PlayersCounterProps = {
  stock: number;
}

export const PlayersCounter: React.VFC<PlayersCounterProps> = ({stock}) => {
  const getStockIcons = () => {
    if(stock >= 10){
      return <h1>まだまだ余裕</h1>;
    }
    const stockIcons = [];
    for(let i = 0; i < stock; i++){
      stockIcons.push(<AccessibilityNewIcon/>)
    }
    return stockIcons;
  }

  return (
    <>
      {getStockIcons()}
    </>
  );
};

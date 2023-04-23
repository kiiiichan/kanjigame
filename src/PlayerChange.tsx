import React from "react"; // Reactをインポート
import { Button, Paper } from "@mui/material";
import { FC } from "react";

type Props = {
  onRestartClick: () => void;
};

export const PlayerChange: FC<Props> = ({ onRestartClick }) => {
  return (
    <Paper
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onClick={onRestartClick}>ReStart!</Button>
    </Paper>
  );
};

import React from "react";
import { Timer } from "./Timer";
import { Box } from "@mui/material";

type QuestionDisplayProps = {
  question: string;
  startSec: number;
};

export const QuestionDisplay: React.VFC<QuestionDisplayProps> = ({
  question,
  startSec,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <div
        style={{
          height: "80vh",
          backgroundImage: "url('/assets/images/panda.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Timer startSec={startSec}></Timer>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{question}</h1>
        </div>
      </div>
    </Box>
  );
};

import React from "react";
import { Timer } from "./Timer";
import { Box } from "@mui/material";
import { count } from "console";

type QuestionDisplayProps = {
  question: string;
  countSec: number;
  setCountSec: any;
};

export const QuestionDisplay: React.VFC<QuestionDisplayProps> = ({
  question,
  countSec,
  setCountSec,
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
          <Timer countSec={countSec} setCountSec={setCountSec}></Timer>
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

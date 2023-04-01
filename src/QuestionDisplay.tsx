import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Timer } from './Timer';
import { Box } from '@mui/material';

type QuestionDisplayProps = {
  question: string;
  startSec: number;
}

export const QuestionDisplay: React.VFC<QuestionDisplayProps> = ({question,startSec}) => {
  
  return (
    <Box
    sx={{ height:"2000px", width: "100%", backgroundImage: "url('/assets/images/panda.png')" }}
    >
    <div style={{height:"100vh", backgroundImage: "url('/assets/images/panda.png')"}}>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
        <Timer startSec={startSec}></Timer>
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1>
          {question}
        </h1>
      </div>
    </div>
    </Box>
  );
};

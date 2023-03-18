import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Timer } from './Timer';

type QuestionDisplayProps = {
  question: string;
  startSec: number;
}

export const QuestionDisplay: React.VFC<QuestionDisplayProps> = ({question,startSec}) => {
  
  return (
    <div style={{height:"100vh"}}>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
        <Timer startSec={startSec}></Timer>
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1>
          {question}
        </h1>
      </div>
    </div>
  );
};

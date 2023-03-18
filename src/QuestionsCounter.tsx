import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


type QuestionsCounterProps = {
  progress: number;
  totalQuestions: number;
}

export const QuestionsCounter: React.VFC<QuestionsCounterProps> = ({progress,totalQuestions}) => {
  const getProgressIcons = () => {
    const progressIcons = [];
    for(let i = 0; i < progress; i++){
      progressIcons.push(<CheckCircleIcon/>)
    }
    for(let i = progress; i < totalQuestions; i++){
      progressIcons.push(<CheckCircleOutlineIcon/>)
    }
    return progressIcons;
  }

  return (
    <span>
      {getProgressIcons()}
    </span>
  );
};
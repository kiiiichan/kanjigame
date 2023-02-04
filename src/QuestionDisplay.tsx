import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

type QuestionDisplayProps = {
  question: string;
}

export const QuestionDisplay: React.VFC<QuestionDisplayProps> = ({question}) => {
  
  return (
    <h1>
      {question}
    </h1>
  );
};

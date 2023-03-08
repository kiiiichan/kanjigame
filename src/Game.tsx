import React, { useState } from 'react';
import {CorrectButton} from './CorrectButton';
import {DismisButton} from './DismisButton';
import {PlayersCounter} from './PlayersCounter';
import { QuestionDisplay } from './QuestionDisplay';
import { QuestionsCounter } from './QuestionsCounter';

function Game() {
  const questions = ["モンダイイチ","モンダイニ","モンダイサン","モンダイヨン","モンダイゴ"];
  const [stock, setStock] = useState(3);
  const [questionNum, setQuestionNum] = useState(0);
  const correctOnClickHandler = () => {
    setQuestionNum((prevCount) => prevCount + 1);
  }
  const dissmissOnClickHandler = () => {
    setStock((prevCount) => prevCount - 1);
  }

  const getDisplay = () => {
    if (stock <= 0) {
      return "GameOver" 
    } else {
      return questions[questionNum]
  }; 
}

  return (
    <>
      <QuestionsCounter progress={questionNum + 1} totalQuestions={questions.length}></QuestionsCounter>
      <PlayersCounter stock={stock}></PlayersCounter>
      <QuestionDisplay question={getDisplay()}></QuestionDisplay>
      <CorrectButton onClick={correctOnClickHandler}></CorrectButton>
      <DismisButton onClick={dissmissOnClickHandler}></DismisButton>
    </>
  );
}

export default Game;

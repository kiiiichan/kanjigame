import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { CorrectButton } from "./CorrectButton";
import { DismisButton } from "./DismisButton";
import { PlayersCounter } from "./PlayersCounter";
import { QuestionDisplay } from "./QuestionDisplay";
import { QuestionsCounter } from "./QuestionsCounter";
import { Timer } from "./Timer";

function Game() {
  const questions = [
    "モンダイイチ",
    "モンダイニ",
    "モンダイサン",
    "モンダイヨン",
    "モンダイゴ",
  ];
  const startCountDownSec = 10;
  const [stock, setStock] = useState(3);
  const [questionNum, setQuestionNum] = useState(0);
  const [hasPushedStart, setHasPushedStart] = useState(false);

  const correctOnClickHandler = () => {
    setQuestionNum((prevCount) => prevCount + 1);
    playAudio("correct.mp3");
  };
  const dissmissOnClickHandler = () => {
    setStock((prevCount) => prevCount - 1);
    playAudio("dissmiss.mp3");
  };

  const playAudio = (fileName: string) => {
    const audio = new Audio(`/assets/music/${fileName}`);
    audio.play();
  };

  const startClickHandler = () => {
    setHasPushedStart(true);
    playAudio("bgm.mp3");
  };

  const getDisplay = () => {
    if (stock <= 0) {
      return "GameOver";
    } else {
      return questions[questionNum];
    }
  };

  return (
    <>
      {hasPushedStart ? (
        <>
            <Paper sx={{height:"80%",width:"80%",padding:2,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <QuestionsCounter
        progress={questionNum + 1}
        totalQuestions={questions.length}
      ></QuestionsCounter>
        <PlayersCounter stock={stock}></PlayersCounter>
    </div>
      <QuestionDisplay question={getDisplay()} startSec={startCountDownSec}></QuestionDisplay>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
      <CorrectButton onClick={correctOnClickHandler}></CorrectButton>
      <DismisButton onClick={dissmissOnClickHandler}></DismisButton>
      </div>

    </Paper>

        </>
      ) : (
        <Button onClick={startClickHandler}>START</Button>
      )}
    </>
  );
}

export default Game;

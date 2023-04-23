import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { CorrectButton } from "./CorrectButton";
import { DismisButton } from "./DismisButton";
import { PlayerChange } from "./PlayerChange";
import { PlayersCounter } from "./PlayersCounter";
import { QuestionDisplay } from "./QuestionDisplay";
import { QuestionsCounter } from "./QuestionsCounter";

type GameStatus = "start" | "playing" | "restart";

function Game() {
  const questions = [
    "モンダイイチ",
    "モンダイニ",
    "モンダイサン",
    "モンダイヨン",
    "モンダイゴ",
  ];
  const startCountDownSec = 5;
  const [stock, setStock] = useState(3);
  const [questionNum, setQuestionNum] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>("start");
  const [countSec, setCountSec] = useState(startCountDownSec);

  const correctOnClickHandler = () => {
    setQuestionNum((prevCount) => prevCount + 1);
    playAudio("correct.mp3");
  };
  const dismissOnClickHandler = () => {
    if (countSec <= 0) {
      setStock((prevCount) => prevCount - 1);
      setGameStatus("restart");
    }
    playAudio("dissmiss.mp3");
  };

  const playAudio = (fileName: string) => {
    const audio = new Audio(`/assets/music/${fileName}`);
    audio.volume = 0.01;
    audio.play();
  };

  const startClickHandler = () => {
    setGameStatus("playing");
    playAudio("bgm.mp3");
  };

  const restartClickHandler = () => {
    setCountSec(startCountDownSec);
    setGameStatus("playing");
  };

  const getQuestionSentence = () => {
    if (stock <= 0) {
      return "GameOver";
    } else {
      return questions[questionNum];
    }
  };

  const getDisplay = () => {
    switch (gameStatus) {
      case "start":
        return <Button onClick={startClickHandler}>START</Button>;
      case "playing":
        return (
          <Paper
            sx={{
              height: "80%",
              width: "80%",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: countSec > 3 ? "white" : "red", //三項演算子
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <QuestionsCounter
                progress={questionNum + 1}
                totalQuestions={questions.length}
              ></QuestionsCounter>
              <PlayersCounter stock={stock}></PlayersCounter>
            </div>
            <QuestionDisplay
              question={getQuestionSentence()}
              countSec={countSec}
              setCountSec={setCountSec}
            ></QuestionDisplay>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <CorrectButton onClick={correctOnClickHandler}></CorrectButton>
              <DismisButton onClick={dismissOnClickHandler}></DismisButton>
            </div>
          </Paper>
        );
      case "restart":
        return <PlayerChange onRestartClick={restartClickHandler} />;
    }
  };

  return getDisplay();
}

export default Game;

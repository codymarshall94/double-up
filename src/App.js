import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Timer from "./Components/Timer";
import LevelCounter from "./Components/LevelCounter";
import GameOverModal from "./Components/GameOverModal";
import NumberDisplay from "./Components/NumberDisplay";
import AnswerButtons from "./Components/AnswerButtons";

function App() {
  const [gameActive, setGameActive] = useState(false);
  const [number, setNumber] = useState(0);
  const [correctNumber, setCorrectNumber] = useState(0);
  const [answers, setAnswers] = useState();
  const [level, setLevel] = useState(1);
  const [seconds, setSeconds] = useState(5);
  const [theme, setTheme] = useState("dark");
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  let min = level;
  let max = level * 5;

  //Controlling the game over modal
  const handleClose = () => setShowGameOverModal(false);
  const handleShow = () => setShowGameOverModal(true);

  //Create an array of answers that will be displayed as buttons with 2 wrong and 1 right
  const generateAnswers = (answer) => {
    let answerOptions = [];
    let optionOne = answer - 2;
    let optionTwo = answer + 2;
    answerOptions.push(answer, optionOne, optionTwo);
    let shuffled = answerOptions.sort(() => Math.random() - 0.5);
    setAnswers(shuffled);
  };

  //Start button calls this function
  const gameStart = () => {
    setGameActive(true);
    randomNumber();
  };

  //Reset gets called at the game over modal
  const resetGame = () => {
    handleClose();
    setNumber(0);
    setLevel(1);
    setSeconds(5);
    setAnswers(null);
  };

  //Creates our number whenever game is started or next level
  const randomNumber = () => {
    let numberRandom = Math.floor(Math.random() * (max - min) + min);
    let numberDoubled = numberRandom * 2;
    setNumber(numberRandom);
    setCorrectNumber(numberDoubled);
    generateAnswers(numberDoubled);
  };

  const nextLevel = () => {
    randomNumber();
    setLevel(level + 1);
    setSeconds(seconds + 1);
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <header className="App-header game-item">Double Up!</header>
      </div>

      <div className="game-item">
        <LevelCounter level={level} />
        <Timer
          gameActive={gameActive}
          setGameActive={setGameActive}
          setSeconds={setSeconds}
          seconds={seconds}
          handleShow={handleShow}
        />
      </div>
      <div className="game-item">
        <NumberDisplay number={number} gameActive={gameActive} theme={theme} />
      </div>
      <div className="game-item">
        <AnswerButtons
          answers={answers}
          nextLevel={nextLevel}
          correctNumber={correctNumber}
          theme={theme}
          setSeconds={setSeconds}
          seconds={seconds}
        />
      </div>
      <div className="game-item">
        {gameActive === false ? (
          <Button onClick={() => gameStart()}>Start</Button>
        ) : null}
      </div>
      <GameOverModal
        level={level}
        showGameOverModal={showGameOverModal}
        handleClose={handleClose}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;

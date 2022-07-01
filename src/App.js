import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import { BsFillSunFill } from 'react-icons/bs';
import Timer from "./Components/Timer";
import LevelCounter from "./Components/LevelCounter";
//import GameOverModal from "./Components/GameOverModal";
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
  let min = level;
  let max = level * 5;

  const themeToggler = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }

  const generateAnswers = (answer) => {
    let answerOptions = [];
    let optionOne = answer - 2;
    let optionTwo = answer + 2;
    answerOptions.push(answer, optionOne, optionTwo);
    let shuffled = answerOptions.sort(() => Math.random() - 0.5);
    setAnswers(shuffled);
  };

  const gameStart = () => {
    setGameActive(true);
    randomNumber();
  };

  /*const resetGame = () => {
    setToggleModal(!toggleModal);
    setNumber(0);
    setLevel(1);
  };*/

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

  //const handleShowModal = () => toggleModal(!toggleModal);

  return (
    <div className={theme === 'light' ? "light game-container" : "game-container"}>
        <BsFillSunFill onClick={() => {themeToggler()}}/>
      <div className="game-header">
        <header className={theme === 'light' ? "light App-header game-item" : "App-header game-item"}>Double Up!</header>
      </div>

      <div className="game-item">
        <LevelCounter level={level} />
        <Timer
          gameActive={gameActive}
          setGameActive={setGameActive}
          setSeconds={setSeconds}
          seconds={seconds}
        />
      </div>
      <div className="game-item">
        <NumberDisplay number={number} gameActive={gameActive} theme={theme}/>
      </div>
      <div className="game-item">
        <AnswerButtons answers={answers} nextLevel={nextLevel} correctNumber={correctNumber} theme={theme}/>
      </div>
      <div className="game-item">
        {gameActive === false ? (
          <Button onClick={() => gameStart()}>Start</Button>
        ) : null}
      </div>
      {/*<GameOverModal
        toggleModal={toggleModal}
        level={level}
        setToggleModal={setToggleModal}
        resetGame={resetGame}
  />*/}
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import LevelCounter from './LevelCounter';
import NumberDisplay from './NumberDisplay'
import Timer from './Timer';
import UserInput from './UserInput'



function GameBoard() {
    const [number, setNumber] = useState();
    const [correctNumber, setCorrectNumber] = useState(0);
    const [level, setLevel] = useState(1);
    const [toggleDisable, setToggleDisable] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(5);

    const randomNumber = (min, max) => {
        setToggleDisable(true);
        let numberRand = Math.floor(Math.random() * (max - min) + min);
        let numberDoubled = numberRand * 2;
        setNumber(numberRand);
        setCorrectNumber(numberDoubled);
        toggle();
    }

    function toggle() {
        setIsActive(!isActive);
      }
    
      function reset() {
        setSeconds(5);
        setIsActive(false);
      }

  return (
    <div>
        <LevelCounter 
            level={level}/>
        <Timer 
            isActive={isActive} 
            setIsActive={setIsActive}
            reset={reset}
            setSeconds={setSeconds}
            seconds={seconds}
        />
        <NumberDisplay 
            number={number} 
            correctNumber={correctNumber} 
            randomNumber={randomNumber}
            toggleDisable={toggleDisable}
            setIsActive={setIsActive}
            />
            
        <UserInput 
            correctNumber={correctNumber} 
            randomNumber={randomNumber} 
            level={level}
            setLevel={setLevel}/>
    </div>
  )
}

export default GameBoard
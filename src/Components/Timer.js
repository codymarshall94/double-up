import React, { useEffect } from 'react';

const Timer = ({saveHighScore, gameActive, setGameActive, seconds, setSeconds, handleShow}) => {

  useEffect(() => {
    let interval = null
    if(gameActive) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } 
    if(gameActive && seconds === 0) {
      setGameActive(false);
      handleShow();
      saveHighScore()
    }
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className={`time timer-container ${seconds < 4 && seconds >= 2 ? 'timer-orange' : seconds < 2 ? 'timer-red' : "" } `}>
        {seconds}s
      </div>
    </div>
     
  );
};

export default Timer;
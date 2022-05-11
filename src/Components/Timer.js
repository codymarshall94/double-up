import React, { useState, useEffect } from 'react';

const Timer = ({isActive, reset, setSeconds, seconds}) => {
  
  useEffect(() => {
    let interval = null
    if(isActive) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    if(isActive && seconds == 0) {
      reset();
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div>
    </div>
  );
};

export default Timer;
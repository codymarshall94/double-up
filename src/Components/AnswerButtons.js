import React from "react";
import '../css/answerbuttons.css';

function AnswerButtons({ answers, correctNumber, nextLevel, theme, setSeconds, seconds }) {

    //nextLevel gets called at Root if value is correct
    const isCorrect = (value) => {
        if(value === correctNumber) {
            nextLevel()
          } else {
            setSeconds(seconds - 1)
          }
    }

  if (answers) {
    return (
      <div className="answers-container">
        {answers.map((answer, index) => (
          <button className={theme === 'light' ? "light-buttons answer-button" : "answer-button"} key={index} onClick={() => isCorrect(answer)}>{answer}</button>
        ))}
      </div>
    );
  }
}

export default AnswerButtons;

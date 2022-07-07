import React, { useState } from "react";
import '../css/answerbuttons.css';

function AnswerButtons({ answers, correctNumber, nextLevel, theme, setSeconds, seconds }) {
  const [selected, setSelected] = useState(0);
  let answerCorrect = true;

    //nextLevel gets called at Root if value is correct
  const isCorrect = (value) => {
    setSelected(value)
      if(value === correctNumber) {
          nextLevel()
          setSelected(0);
        } else {
          setSeconds(seconds - 1)
          answerCorrect = false;
          setTimeout(changeAnswerTrue, 1000);
        }
    }

  const changeAnswerTrue = () => {
      answerCorrect= true;
      setSelected(0);
    }

  if (answers) {
    return (
      <div className="answers-container">
        {answers.map((answer, index) => (
          <button className={answerCorrect && selected !== answer ? "answer-button" : "answer-button answer-incorrect" } key={index} onClick={() => isCorrect(answer)}>{answer}</button>
        ))}
      </div>
    );
  }
}

export default AnswerButtons;

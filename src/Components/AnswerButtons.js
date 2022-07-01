import React from "react";
import '../css/answerbuttons.css';

function AnswerButtons({ answers, correctNumber, nextLevel }) {

    //nextLevel gets called at Root if value is correct
    const isCorrect = (value) => {
        if(value === correctNumber) {
            nextLevel()
          }
    }

  if (answers) {
    return (
      <div className="answers-container">
        {answers.map((answer, index) => (
          <button className="answer-button" key={index} onClick={() => isCorrect(answer)}>{answer}</button>
        ))}
      </div>
    );
  }
}

export default AnswerButtons;

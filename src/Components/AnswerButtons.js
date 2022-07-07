import React, { useState } from "react";
import "../css/answerbuttons.css";
import useSound from "use-sound";
import correctSfx from '../Sound/correct.mp3';
import incorrectSfx from '../Sound/incorrect.mp3';

function AnswerButtons({
  answers,
  correctNumber,
  nextLevel,
  setSeconds,
  seconds,
}) {
  const [selected, setSelected] = useState(null);
  const [correct] = useSound(correctSfx);
  const [incorrect] = useSound(incorrectSfx);
  let answerCorrect = true;
  

  //nextLevel gets called at Root if value is correct
  const isCorrect = (value) => {
    setSelected(value);
    if (value === correctNumber) {
      correct();
      nextLevel();
      setSelected(null);
    } else {
      incorrect();
      setSeconds(seconds - 1);
      answerCorrect = false;
      setTimeout(changeAnswerTrue, 1000);
    }
  };

  const changeAnswerTrue = () => {
    answerCorrect = true;
    setSelected(null);
  };

  if (answers) {
    return (
      <div className="answers-container">
        {answers.map((answer, index) => (
          <button
            className={
              answerCorrect && selected !== answer
                ? "answer-button"
                : "answer-button answer-incorrect"
            }
            key={index}
            onClick={() => isCorrect(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    );
  }
}

export default AnswerButtons;

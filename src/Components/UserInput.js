import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


const min = 1;
const max = 10;

function UserInput({randomNumber, correctNumber, level, setLevel, seconds, setSeconds}) {
    const [userGuess, setUserGuess] = useState("");
    

    const isCorrect = (e) => {
        e.preventDefault();
        let numberParsed = parseInt(userGuess);

        if(numberParsed === correctNumber) {
            randomNumber(min, max);
            setLevel(level + 1);
            setSeconds(seconds + 1);
          }
            setUserGuess("")
    }

  return (
    <div>
        <Form onSubmit={isCorrect}>
            <input type='text' value={userGuess} className='user-input' placeholder='Double the number shown!' onChange={(e) => setUserGuess(e.target.value)}/>
        </Form>
    </div>
  )
}

export default UserInput
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const min = 1;
const max = 10;

function UserInput({randomNumber, correctNumber, level, setLevel}) {
    const [userGuess, setUserGuess] = useState("");

    const isCorrect = (e) => {
        e.preventDefault();
        let numberParsed = parseInt(userGuess);

        if(numberParsed === correctNumber) {
            randomNumber(min, max);
            setLevel(level + 1)
        } else {
            
        }
        setUserGuess("")
    }

  return (
    <div>
        <Form onSubmit={isCorrect}>
            <input type='text' value={userGuess} placeholder='Double the number shown!' onChange={(e) => setUserGuess(e.target.value)}/>
            <Button type='submit'>Go</Button>
        </Form>
    </div>
  )
}

export default UserInput
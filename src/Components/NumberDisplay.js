import React from 'react';
import Button from 'react-bootstrap/Button';

const min = 1;
const max = 10;

function NumberDisplay({randomNumber, number, toggleDisable}) {
    

  return (
    <div>
        <Button onClick={() => randomNumber(min, max)} disabled={toggleDisable}>Start</Button>
        <div>{number}</div>
    </div>
  )
}

export default NumberDisplay
import React from "react";

function NumberDisplay({ gameActive, number }) {
  return (
    <div>
      <div>{number !== 0 && gameActive ? number : null}</div>
    </div>
  );
}

export default NumberDisplay;

import React from "react";

function NumberDisplay({ gameActive, number, theme }) {
  return (
    <div className={theme === 'light' ? "light" : "dark"}>
      {number !== 0 && gameActive ? number : null}
    </div>
  );
}

export default NumberDisplay;

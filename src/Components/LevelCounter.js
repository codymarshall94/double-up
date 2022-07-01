import React from 'react';

function LevelCounter({level}) {
  return (
    <div className='level-container'>
       <span className='mx-3'>Level: {level}</span>
    </div>
   
  )
}

export default LevelCounter
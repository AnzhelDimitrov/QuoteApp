import React from 'react'
import { useState } from 'react'

export const App = () => {
  const [advice, setAdvice] = useState('Your advice will be shown here');

  const handleClick = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      })
        .catch((err) => {
          <p>{err.message}</p>
        });
  };

  return (
    <div className='app'> 
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={handleClick}>
          <span>GIVE ME ADVICE!</span>
        </button> 
      </div>
    </div>
  )
}



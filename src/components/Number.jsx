import React from 'react'

const Number = ({ numbers, inputNum }) => {
  return (
    <>
      {numbers.map((number, index) => (
        <button 
          key={index}
          value={number}
          onClick={inputNum}
        >
          {number}
        </button>
      ))}
    </>
  )
}

export default Number
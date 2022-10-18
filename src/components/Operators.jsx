import React from 'react'

const Operators = ({ operatorHandler, clear, ops }) => {
  return (
    <>
      {ops.map((op, index) => (
        <button 
          onClick={operatorHandler}
          key={index} 
          value={op}
        >
          {op}
        </button>
      ))}
      <button onClick={clear}>del</button>
    </>
  )
}

export default Operators
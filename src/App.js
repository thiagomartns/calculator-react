import { useState } from "react";

function App() {

  const [userNumber, setUserNumber] = useState(0)
  const [operator, setOperator] = useState()
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const ops = ['/', '*', '-', '+']

  const inputNum = e => {
    const input = e.target.value
    if (userNumber === 0) {
      setUserNumber(input)
    } else {
      setUserNumber(userNumber + input)
    }
  }

  const operatorHandler = e => {
    const operatorInput = e.target.value
    setOperator(operatorInput)
    const firstNumber = userNumber
    setUserNumber(0)
  }

  const clear = () => {
    setUserNumber(0)
  }

  return (
    <div className="background">
      <div className="calculator-container">
        <h1 className="calculator-h1">
          Just a calculator.
        </h1>
        <div className="calculator-body">
          <div className="calculator-screen">
            <span>{userNumber}</span>
          </div>
          <div className="calculator-operators">
            <button onClick={operatorHandler} >/</button>
            <button onClick={operatorHandler} >x</button>
            <button onClick={operatorHandler} >-</button>
            <button onClick={operatorHandler} >+</button>
            <button onClick={clear} >del</button>
          </div>
          <div className="calculator-numbers">
            {numbers.map((number, index) => (
              <button 
                id={index}
                value={number}
                onClick={inputNum}
              >
                {number}
              </button>
            ))}
            <button>,</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

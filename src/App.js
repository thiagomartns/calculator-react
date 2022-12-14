import { useState } from "react";
import Operators from "./components/Operators";
import Numbers from "./components/Number";

function App() {

  const [userNumber, setUserNumber] = useState(0)
  const [operator, setOperator] = useState()
  const [firstNumber, setFirstNumber] = useState(0)
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']
  const ops = ['/', 'X', '-', '+']

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
    setFirstNumber(userNumber)
    setUserNumber(0)
  }

  const calculate = () => {
    if (operator === '/') {
      setUserNumber(parseFloat(firstNumber) / parseFloat(userNumber))
    } else if (operator === 'X') {
      setUserNumber(parseFloat(firstNumber) * parseFloat(userNumber))
    } else if (operator === '-') {
      setUserNumber(parseFloat(firstNumber) - parseFloat(userNumber))
    } else if (operator === '+') {
      setUserNumber(parseFloat(firstNumber) + parseFloat(userNumber))
    }
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
            <Operators 
              operatorHandler={operatorHandler} 
              clear={clear} 
              ops={ops} 
            />
          </div>
          <div className="calculator-numbers">
            <Numbers 
              inputNum={inputNum} 
              numbers={numbers} 
            />
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

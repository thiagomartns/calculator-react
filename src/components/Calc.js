import React, { useState } from 'react'

const Calc = () => {

  const [result, setResult] = useState(0)

  return (
    <span>{result}</span>
  )
}

export default Calc
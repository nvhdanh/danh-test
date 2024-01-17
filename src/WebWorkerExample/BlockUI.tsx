import { useState } from 'react'

const BlockUI = () => {
  const [result, setResult] = useState(0)

  const performHeavyCalculation = () => {
    // Simulate a heavy calculation
    let sum = 0
    for (let i = 0; i < 3 * 1000 * 1000 * 1000; i++) {
      sum += i
    }
    setResult(sum)
  }

  return (
    <div>
      <button onClick={performHeavyCalculation}>
        Perform Heavy Calculation
      </button>
      <div>Result: {result}</div>
      <button onClick={() => console.log(2)}>Click</button>
    </div>
  )
}

export default BlockUI

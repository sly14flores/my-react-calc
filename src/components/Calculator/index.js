import './Calculator.css'
import { useSelector } from 'react-redux'

import NumPads from './NumPads'

const Calculator = () => {

  console.log("Calculator")

  const result = useSelector(state => state.calculator.result)

  return (
    <div className="calculator-wrapper">
      <div className="calculator">

        <input type="text" className="calculator-screen" value={result} disabled />

        <NumPads />

      </div>
    </div>
  )
}

export default Calculator
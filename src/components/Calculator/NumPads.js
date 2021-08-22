import { memo } from 'react'
import { useDispatch } from 'react-redux'

import {
  append,
  clear,
  operator,
  equals,
} from '../../redux/calculatorSlice'

const NumPads = memo(() => {

  console.log("NumPads")

  const dispatch = useDispatch()  

  const handleAppend = (e) => {
    dispatch(append(e.target.value))
  }

  const handleClear = () => {
    dispatch(clear())
  }

  const handleOperator = (e) => {
    dispatch(operator(e.target.value))
  }

  const handleEquals = () => {
    dispatch(equals())
  }  

  return (
    <>
        <div className="calculator-keys">
          
          <button type="button" name="plus" className="operator" value="+" onClick={handleOperator}>+</button>
          <button type="button" name="minus" className="operator" value="-" onClick={handleOperator}>-</button>
          <button type="button" name="multiply" className="operator" value="x" onClick={handleOperator}>&times;</button>
          <button type="button" name="divide" className="operator" value="/" onClick={handleOperator}>&divide;</button>

          <button type="button" value="7" onClick={handleAppend}>7</button>
          <button type="button" value="8" onClick={handleAppend}>8</button>
          <button type="button" value="9" onClick={handleAppend}>9</button>

          <button type="button" value="4" onClick={handleAppend}>4</button>
          <button type="button" value="5" onClick={handleAppend}>5</button>
          <button type="button" value="6" onClick={handleAppend}>6</button>

          <button type="button" value="1" onClick={handleAppend}>1</button>
          <button type="button" value="2" onClick={handleAppend}>2</button>
          <button type="button" value="3" onClick={handleAppend}>3</button>

          <button type="button" value="0" onClick={handleAppend}>0</button>
          <button type="button" className="decimal" value="." onClick={handleAppend}>.</button>
          <button type="button" className="all-clear" value="all-clear" onClick={handleClear}>AC</button>

          <button type="button" className="equal-sign" value="=" onClick={handleEquals}>=</button>

        </div>    
    </>
  )

})

export default NumPads
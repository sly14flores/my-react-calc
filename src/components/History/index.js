import './History.css'
import { useSelector, useDispatch } from 'react-redux'

import { clearHistory, removeResult } from '../../redux/calculatorSlice'

const History = () => {

  const history = useSelector(state => state.calculator.history)

  const dispatch = useDispatch()

  const clear = () => {
    dispatch(clearHistory())
  }

  const remove = (i) => {
    dispatch(removeResult(i))
  }

  const displayHistory = history.map((h, i) => (
    <p key={i}>
      {h}
      <button className="result-button" onClick={() => remove(i)}>
        <strong>x</strong>
      </button>
    </p>
  ))

  return (
    <div>
      <p>
        History
        <button type="button" onClick={clear}>Clear</button>
      </p>
      <div className="results">
        {displayHistory}
      </div>
    </div>
  )
}

export default History
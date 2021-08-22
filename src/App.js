import './App.css'
import Calculator from './components/Calculator'
import History from './components/History'

function App() {
  return (
    <div className="container">
      <Calculator />
      <div className="history">
        <History />
      </div>      
    </div>
  );
}

export default App;

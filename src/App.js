import { faDivide, faEquals, faMinus, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
        setInput(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '+/-') {
      // Toggle positive/negative
      setInput((prevInput) => (prevInput.startsWith('-') ? prevInput.slice(1) : `-${prevInput}`));
    } else if (value === '%') {
      // Calculate percentage
      try {
        const percentageResult = (eval(input) / 100).toString();
        setInput(percentageResult);
        setResult(percentageResult);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='box'>
          <div className='display'>
            <div className="input displayTextInput">{input}</div>
            <br />
            <div className="result displayTextResult">{result}</div>
          </div>
          <div class="container">
            <div class="grid-item" onClick={() => handleClick('C')}>C</div>
            <div class="grid-item" onClick={() => handleClick('+/-')}>+/-</div>
            <div class="grid-item" onClick={() => handleClick('%')}>%</div>
            <div class="grid-item specialBtn" onClick={() => handleClick('/')} ><FontAwesomeIcon icon={faDivide} style={{color: "#ffffff",}} /></div>
            <div class="grid-item" onClick={() => handleClick('7')}>7</div>
            <div class="grid-item" onClick={() => handleClick('8')}>8</div>
            <div class="grid-item" onClick={() => handleClick('9')}>9</div>
            <div class="grid-item specialBtn" onClick={() => handleClick('*')}><FontAwesomeIcon icon={faX}  /></div>
            <div class="grid-item" onClick={() => handleClick('4')}>4</div>
            <div class="grid-item" onClick={() => handleClick('5')}>5</div>
            <div class="grid-item" onClick={() => handleClick('6')}>6</div>
            <div class="grid-item specialBtn" onClick={() => handleClick('-')}><FontAwesomeIcon icon={faMinus} /></div>
            <div class="grid-item" onClick={() => handleClick('1')}>1</div>
            <div class="grid-item" onClick={() => handleClick('2')}>2</div>
            <div class="grid-item" onClick={() => handleClick('3')}>3</div>
            <div class="grid-item specialBtn" onClick={() => handleClick('+')}><FontAwesomeIcon icon={faPlus} /></div>
            <div class="grid-item" onClick={() => handleClick('0')}>0</div>
            <div class="grid-item" onClick={() => handleClick('.')}>.</div>
            <div class="grid-item specialBtn" onClick={() => handleClick('=')}><FontAwesomeIcon icon={faEquals}/></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

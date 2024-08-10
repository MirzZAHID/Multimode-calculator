import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = ({ mode, showHistory, showMemory }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [memory, setMemory] = useState(null);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const result = eval(input).toString();
      setInput(result);
      setHistory([...history, { input, result }]);
    } catch {
      setInput('Error');
    }
  };

  const handleMemory = (action) => {
    if (action === 'M+') {
      setMemory(input);
    } else if (action === 'M-') {
      setMemory(null);
    } else if (action === 'MR') {
      setInput(memory || '');
    } else if (action === 'MC') {
      setMemory(null);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        {/* Standard Calculator Buttons */}
        <Button onClick={handleClear} className="button large">C</Button>
        <Button onClick={handleBackspace} className="button">←</Button>
        <Button onClick={() => handleButtonClick('/')} className="button">/</Button>
        <Button onClick={() => handleButtonClick('*')} className="button">*</Button>

        <Button onClick={() => handleButtonClick('7')} className="button">7</Button>
        <Button onClick={() => handleButtonClick('8')} className="button">8</Button>
        <Button onClick={() => handleButtonClick('9')} className="button">9</Button>
        <Button onClick={() => handleButtonClick('-')} className="button">-</Button>

        <Button onClick={() => handleButtonClick('4')} className="button">4</Button>
        <Button onClick={() => handleButtonClick('5')} className="button">5</Button>
        <Button onClick={() => handleButtonClick('6')} className="button">6</Button>
        <Button onClick={() => handleButtonClick('+')} className="button">+</Button>

        <Button onClick={() => handleButtonClick('1')} className="button">1</Button>
        <Button onClick={() => handleButtonClick('2')} className="button">2</Button>
        <Button onClick={() => handleButtonClick('3')} className="button">3</Button>
        <Button onClick={handleEqual} className="button large">=</Button>

        <Button onClick={() => handleButtonClick('0')} className="button double-width">0</Button>
        <Button onClick={() => handleButtonClick('.')} className="button">.</Button>

        {/* Memory Buttons */}
        <Button onClick={() => handleMemory('MC')} className="button orange">MC</Button>
        <Button onClick={() => handleMemory('MR')} className="button orange">MR</Button>
        <Button onClick={() => handleMemory('M+')} className="button orange">M+</Button>
        <Button onClick={() => handleMemory('M-')} className="button orange">M-</Button>

        {/* Additional Scientific Calculator Buttons */}
        {mode === 'scientific' && (
          <>
            <Button onClick={() => handleButtonClick('Math.sin(')}>sin</Button>
            <Button onClick={() => handleButtonClick('Math.cos(')}>cos</Button>
            <Button onClick={() => handleButtonClick('Math.tan(')}>tan</Button>
            <Button onClick={() => handleButtonClick('Math.sqrt(')}>√</Button>
            <Button onClick={() => handleButtonClick('Math.pow(')}>^</Button>
            <Button onClick={() => handleButtonClick('Math.log(')}>log</Button>
          </>
        )}
      </div>
      {showHistory && (
        <div className="history-container">
          <h2>History</h2>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                {entry.input} = {entry.result}
              </li>
            ))}
          </ul>
        </div>
      )}
      {showMemory && (
        <div className="memory-container">
          <h2>Memory</h2>
          <p>{memory !== null ? memory : 'Empty'}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;

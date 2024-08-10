import React, { useState } from 'react';
import Calculator from './Calculator';
import DateCalculator from './DateCalculator';
import WeightCalculator from './WeightCalculator';
import Converter from './Converter'; // Import the new Converter component
import './App.css';

const App = () => {
  const [mode, setMode] = useState('standard');
  const [showHistory, setShowHistory] = useState(false);
  const [showMemory, setShowMemory] = useState(false);

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const toggleMemory = () => {
    setShowMemory(!showMemory);
  };

  return (
    <div className="app">
      <h1>Multi-Mode Calculator</h1>
      <div className="controls">
        <select value={mode} onChange={handleModeChange}>
          <option value="standard">Standard Calculator</option>
          <option value="scientific">Scientific Calculator</option>
          <option value="date">Date Calculation</option>
          <option value="weight">Weight Calculation</option>
          <option value="converter">Converter</option> {/* Added option */}
        </select>
        <button onClick={toggleHistory} className="toggle-button">History</button>
        <button onClick={toggleMemory} className="toggle-button">Memory</button>
      </div>
      <div className="calculator-container">
        {mode === 'standard' || mode === 'scientific' ? (
          <Calculator mode={mode} showHistory={showHistory} showMemory={showMemory} />
        ) : mode === 'date' ? (
          <DateCalculator />
        ) : mode === 'weight' ? (
          <WeightCalculator />
        ) : mode === 'converter' ? (
          <Converter />
        ) : null}
      </div>
    </div>
  );
};

export default App;

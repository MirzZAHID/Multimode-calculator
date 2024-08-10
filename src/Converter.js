import React, { useState } from 'react';


const Converter = () => {
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState('length');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    let convertedValue;
    if (unit === 'length') {
      convertedValue = value * 100; // Example conversion from meters to centimeters
    } else if (unit === 'weight') {
      convertedValue = value * 2.205; // Example conversion from kilograms to pounds
    }
    setResult(convertedValue.toFixed(2));
  };

  return (
    <div className="converter">
      <h2>Unit Converter</h2>
      <label>
        Value:
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <label>
        Unit Type:
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="length">Length</option>
          <option value="weight">Weight</option>
        </select>
      </label>
      <button onClick={handleConvert}>Convert</button>
      <div>
        Result: {result} {unit === 'length' ? 'cm' : 'lbs'}
      </div>
    </div>
  );
};

export default Converter;

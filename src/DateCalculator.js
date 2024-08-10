import React, { useState } from 'react';


const DateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [difference, setDifference] = useState('');

  const handleCalculate = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDifference(diffDays);
  };

  return (
    <div className="date-calculator">
      <h2>Date Calculation</h2>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <button onClick={handleCalculate}>Calculate Difference</button>
      <div className="result-display">
        {difference !== '' && (
          <div className="result">
            <h3>Difference:</h3>
            <p>{difference} days</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateCalculator;

import React, { useState } from 'react';

const WeightCalculator = () => {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [idealWeight, setIdealWeight] = useState('');

  const handleCalculate = () => {
    let weight;
    if (gender === 'male') {
      weight = 50 + 0.91 * (height - 152.4) - 0.5 * age;
    } else {
      weight = 45.5 + 0.91 * (height - 152.4) - 0.5 * age;
    }
    setIdealWeight(weight.toFixed(2));
  };

  return (
    <div className="weight-calculator">
      <h2>Ideal Weight Calculation</h2>
      <label>
        Height (cm):
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <label>
        Age (years):
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <button onClick={handleCalculate}>Calculate Ideal Weight</button>
      <div>
        Ideal Weight: {idealWeight} kg
      </div>
    </div>
  );
};

export default WeightCalculator;

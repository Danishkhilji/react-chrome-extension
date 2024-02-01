import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function AddNumber() {

  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(23);
  const [result, setResult] = useState(0);
  
  const handleNum1Change = (event) => {
    setNum1(Number(event.target.value));
  };
  
  const handleNum2Change = (event) => {
    setNum2(Number(event.target.value));
  };
  
  const handleAddition = () => {
    setResult(num1 + num2);
  };

  return (
    <div className="container">
      <h1>React web extension</h1>

      <h3 className="title">React Js Add Two Numbers</h3>
      <input
        type="number"
        className="input"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        type="number"
        className="input"
        value={num2}
        onChange={handleNum2Change}
      />
      <button className="button" onClick={handleAddition}>
        Add
      </button>
      <p className="result">Result: {result}</p>
    </div>
  );
}

export default AddNumber;

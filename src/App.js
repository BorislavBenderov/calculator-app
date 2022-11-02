import { useState } from "react";

function App() {
  const [calculate, setCalculate] = useState('');
  const [result, setResult] = useState('');

  const chars = ['/', '*', '+', '-', '.'];

  const calc = (value) => {
    if (chars.includes(value) && calculate === '' || 
    chars.includes(value) && chars.includes(calculate.slice(-1))) {
      return;
    }

    setCalculate(calculate + value);

    if (!chars.includes(value)) {
      setResult(eval(calculate + value).toString());
    }
  }

  const equal = () => {
    setCalculate(eval(calculate).toString());
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button className="digits__btn" onClick={() => calc(i.toString())} key={i}>{i}</button>)
    }

    return digits;
  }

  const remove = () => {
    setCalculate('')
    setResult('');
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}
          {calculate || '0'}
        </div>
        <div className="operators">
          <button className="operators__btn" onClick={() => calc('/')}>/</button>
          <button className="operators__btn" onClick={() => calc('*')}>*</button>
          <button className="operators__btn" onClick={() => calc('+')}>+</button>
          <button className="operators__btn" onClick={() => calc('-')}>-</button>
          <button className="operators__btn" onClick={() => remove()}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button className="digits__btn" onClick={() => calc('0')}>0</button>
          <button className="digits__btn" onClick={() => calc('.')}>.</button>
          <button className="digits__btn" onClick={equal}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

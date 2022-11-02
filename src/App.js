function App() {

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button className="digits__btn" key={i}>{i}</button>)
    }

    return digits;
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span>0
        </div>

        <div className="operators">
          <button className="operators__btn">/</button>
          <button className="operators__btn">*</button>
          <button className="operators__btn">+</button>
          <button className="operators__btn">-</button>
          <button className="operators__btn">DEL</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button className="digits__btn">0</button>
            <button className="digits__btn">.</button>
            <button className="digits__btn">=</button>
          </div>
        </div>
      </div>
  );
}

export default App;

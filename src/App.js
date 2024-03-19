import { useState } from "react";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  const CountPlus = () => {
    setCount(count + 1);
  };

  const CountMinus = () => {
    if (count === 0) return alert("Count равен нулю, куда ты жмёшь!");
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={CountMinus} className="minus">
          - Минус
        </button>
        <button onClick={CountPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 100;

  const handleIncrement = () => {
    if (count === max) {
      return;
    } else {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count === min) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;

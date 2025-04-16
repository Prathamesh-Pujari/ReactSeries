import React, { useState } from "react";

const CounterApp = () => {
  const [add, setAdd] = useState(0);

  const handleIncrement = () => {
    if (add <= 20) {
      setAdd(add + 1);
    } else {
      alert("check boundry");
    }
  };

  const handleDecrement = () => {
    if (add >= 0) {
      setAdd(add - 1);
    } else {
      alert("Cant be Negative");
    }
  };

  return (
    <div>
      <h1>{add}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterApp;

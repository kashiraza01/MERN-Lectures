import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, []);

  function addOne() {
    setCount(count + 1);
  }

  function addTwo() {
    setCount(count + 1);
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="card">
      <h3>Counter</h3>
      <p>Current count: <strong>{count}</strong></p>
      <div className="row">
        <button onClick={addOne}>Add 1</button>
        <button onClick={addTwo}>Add 2</button>
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

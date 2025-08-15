import React, { useEffect, useState } from 'react';
import './styles.css'

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(0);

  function handleStart() {
    if (!start) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
      setStart(interval)
    }
  }
  function handleStop() {
    console.log(start)
    if (start) {
      clearInterval(start)
    }
    setStart(0)
  }
  function handleReset() {
    if (start) {
      clearInterval(start)
    }
    setSeconds(0)
    setStart(0)
  }
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Time: {seconds}s</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;

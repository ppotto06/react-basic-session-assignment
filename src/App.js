import React, { useState, useEffect } from "react";
import "./App.css";
import TimerDisplay from "./TimerDisplay";
import TimerButton from "./TimerButton";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isReset, setIsReset] = useState(false); // 리셋 후 상태
  const [showNewButton, setShowNewButton] = useState(false); // 새로운 버튼 표시 여부

  // 1초마다 초 증가,  20초 시 '20초가 지났습니다!'가 뜸뜸
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 20) {
            clearInterval(interval);
            setIsRunning(false);
            alert("20초가 지났습니다!");
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setIsReset(false);
    setShowNewButton(false);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
    setIsReset(true);
    setShowNewButton(true);
    console.log("리셋되었습니다");
  };

  return (
    <div className="container">
      <TimerDisplay seconds={seconds} />
      <TimerButton
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />

    </div>
  );
}

export default App;

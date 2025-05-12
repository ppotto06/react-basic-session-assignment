import React from "react";

function TimerDisplay(props) {
  return(
    <div>
      <h3>🧁 Timers : {props.seconds}초</h3>
    </div>
  );
}

export default TimerDisplay;
// import function export 세트
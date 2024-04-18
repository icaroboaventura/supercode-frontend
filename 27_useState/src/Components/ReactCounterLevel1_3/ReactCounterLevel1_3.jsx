import { useState } from "react";
import "./ReactCounterLevel1_3.css";

const ReactCounterLevel1_3 = () => {
  let [counter, setCounter] = useState(0);

  counter <= 0 ? (counter = 0) : (counter = counter);

  return (
    <>
      <div className="add-sub-div">
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <button onClick={() => setCounter(0)} className="reset">
        Reset
      </button>
    </>
  );
};

export default ReactCounterLevel1_3;

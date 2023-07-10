import "./styles.css";
import { useState } from "react";
import Moment from "react-moment";
import moment from "moment";

export default function DateCounter() {
    const style = {
        fontFamily: "sans-serif",
        textAlign: "center",
    }
  return (
    <div className="App" style={style}>
      <h1>Hello Date Counter</h1>
      <h2>This is Complex Date Counter</h2>
      <DateParts />
      <DateSliderParts />
    </div>
  );
}

function DateParts() {
  const [steps, setSteps] = useState(1);
  const [counter, setCounter] = useState(0);

  function handleMinusSteps() {
    setSteps((st) => (st > 1 ? st - 1 : st));
    // handleMinusCounter()
  }

  function handlePlusSteps() {
    setSteps((st) => st + 1);
    // handlePlusCounter()
  }

  function handleMinusCounter() {
    setCounter((cn) => cn - steps);
  }

  function handlePlusCounter() {
    setCounter((cn) => cn + steps);
  }

  const start = moment().add(`${counter}`, "day");

  return (
    <div>
      <button
        styles={{ backgroundColour: "#808080" }}
        onClick={handleMinusSteps}
      >
        {" "}
        -{" "}
      </button>
      <span> Steps : {steps} </span>
      <button
        styles={{ backgroundColour: "#808080" }}
        onClick={handlePlusSteps}
      >
        {" "}
        +{" "}
      </button>
      <br />
      <button
        styles={{ backgroundColour: "#808080" }}
        onClick={handleMinusCounter}
      >
        {" "}
        -{" "}
      </button>
      <span> Counter : {counter} </span>
      <button
        styles={{ backgroundColour: "#808080" }}
        onClick={handlePlusCounter}
      >
        {" "}
        +{" "}
      </button>
      <br />
      {counter === 0 ? (
        <span>Today is </span>
      ) : (
        <span>
          {Math.abs(counter)} days {counter > 0 ? "from" : "before"} today is{" "}
        </span>
      )}
      <Moment date={start} format="DD-MMM-YYYY" />
    </div>
  );
}


function DateSliderParts() {
    const [steps, setSteps] = useState(1);
    const [counter, setCounter] = useState(0);

    function handleNegetive(){
        setCounter(()=>counter-steps)
    }

    function handlePostive(){
        setCounter(()=>counter+steps)
    }
    const start = moment().add(`${counter}`, "day");
  
    return (
      <div>
        <input type="range" min={0} max={10} value={steps} onChange={(e)=>setSteps(Number(e.target.value))} />{steps}
        <div>
            <button onClick={handleNegetive}> - </button>
            <input type="text" value={counter} onChange={(e) => setCounter(Number(e.target.value))}/>
            <button onClick={handlePostive}> + </button>
        </div>
        <br />
        {counter === 0 ? (
          <span>Today is </span>
        ) : (
          <span>
            {Math.abs(counter)} days {counter > 0 ? "from" : "before"} today is{" "}
          </span>
        )}
        <Moment date={start} format="DD-MMM-YYYY" />
        <br></br>
        {counter !== 0 || steps !== 1 ? <button onClick={() => {
            setCounter(0)
            setSteps(1)
        }}>Reset</button>:<></> }
      </div>
    );
  }
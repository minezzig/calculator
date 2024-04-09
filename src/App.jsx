import { useState } from "react";
import "./App.css";
import Display from "./Display";
import Button from "./Button";

function App() {
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(0);
  const [oper, setOper] = useState("+");
  const [opPressed, setOpPressed] = useState(false);
  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "x",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  return (
    <>
      <div className="m-auto max-w-80 rounded-xl bg-black p-2 shadow-2xl">
        <div>
          <Display input={input} />
        </div>
        <div className="grid grid-cols-4 ">
          {buttons.map((button) => (
            <Button
              key={button}
              button={button}
              total={total}
              setTotal={setTotal}
              input={input}
              setInput={setInput}
              oper={oper}
              setOper={setOper}
              opPressed={opPressed}
              setOpPressed={setOpPressed}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
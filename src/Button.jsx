import React from "react";

export default function Button({
  button,
  total,
  setTotal,
  input,
  setInput,
  oper,
  setOper,
  opPressed,
  setOpPressed,
}) {
  const operators = ["+", "-", "x", "/"];

  // clear calculator memory
  const handleClear = () => {
    setInput("");
    setTotal(0);
  };

  // change to positivie/negative
  const handleSwitch = () => {
    setInput((prev) => String(prev * -1));
  };

  // convert to percentage
  const handlePercent = () => {
    setInput((prev) => String(prev / 100));
  };

  // deal with a number entry
  const handleNumber = (button) => {
    //start new calculation
    if (opPressed) setInput((prev) => String(button));
    else setInput((prev) => prev + String(button));
    setOpPressed(false);
  };

  const handleDecimal = (button) => {
    if (opPressed) setInput((prev) => String(button));
    setInput((prev) => prev + ".");
    setOpPressed(false);
  };

  // do something based on operand
  const handleSymbol = (button) => {
    setOpPressed(true);
    setOper(button);
    setTotal(+input);
  };

  // solve equation by check for operand
  const handleEqual = () => {
    setOpPressed(true);
    setInput((curr) =>
      oper === "+"
        ? String(+total + +curr)
        : oper === "-"
          ? String(+total - +curr)
          : oper === "x"
            ? String(+total * +curr)
            : String(+total / +curr),
    );
    setTotal(Number(input));
  };

  return (
    <button
      className={`border border-black bg-blue-500 px-3 py-5 text-white ${typeof button === "number" ? "bg-blue-500" : "bg-blue-700"} ${button === 0 ? "col-span-2" : "col-span-1"} ${button === "=" && "rounded-br-md"} ${button === 0 && "rounded-bl-md"}`}
      onClick={() =>
        button === "AC"
          ? handleClear()
          : button === "+/-"
            ? handleSwitch(button)
            : button === "%"
              ? handlePercent()
              : operators.includes(button)
                ? handleSymbol(button)
                : typeof button === "number"
                  ? handleNumber(button)
                  : button === "."
                    ? handleDecimal(button)
                    : button === "="
                      ? handleEqual(button)
                      : null
      }
    >
      {button}
    </button>
  );
}

import { useState, useEffect } from "react";
// import React from "react";

export default function Counter({ finishGame }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    // return () => {
    //   window.removeEventListener("keydown", handleKeyPress);
    // };
  }, [count]);

  const handleKeyPress = (event) => {
    console.log('key pressed');
    const { key } = event;
    if (key === "Enter") {
      setCount(count + 1);
    }
  };
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1 style={{ fontSize: "64px" }}>{count}</h1>
        <button
          style={buttonStyle}
          onClick={() => {
            handleClick();
          }}
        >
          +
        </button>
        <div>
          <button
            style={buttonStyle}
            onClick={() => {
              finishGame();
            }}
          >
            Finish Game
          </button>
        </div>
      </div>
    </>
  );
}

const buttonStyle = {
  fontSize: "32px",
  width: "200px",
  height: "48px",
  borderRadius: "4px",
  marginRight: "24px",
  marginLeft: "24px",
  marginTop: "30px",
  color: "#fff",
  backgroundColor: "#66ccff",
};

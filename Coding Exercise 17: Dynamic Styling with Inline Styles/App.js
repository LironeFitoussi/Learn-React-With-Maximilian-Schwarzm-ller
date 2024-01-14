import React from "react";

function App() {
  const [textColor, setTextColor] = React.useState("white");

  return (
    <div id="app">
      <h1 style={{ color: textColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setTextColor("green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setTextColor("red")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Book from "./components/Book";
import Line from "./components/Line";
import LineButton from "./components/LineButton";

const book = {
  name: "Fanduel",
};

function App() {
  const [count, setCount] = useState(0);
  const [line, setLine] = useState({
    adjust: -4,
    price: -110,
    lastUpdate: Date.now(),
  });

  function updateLine() {
    setLine({
      ...line,
      lastUpdate: Date.now(),
    });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onMouseDown={updateLine}>Update Line</button>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <LineButton>
        <Book data={book} />
        <Line data={line} />
      </LineButton>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

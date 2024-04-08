import { useState } from "react";
import "./App.css";

import Book from "./components/Book";
import Line from "./components/Line";
import LineButton from "./components/LineButton";

const LINE_TEMPLATE = {
  id: 1,
  adjust: -4,
  price: -110,
  lastUpdate: Date.now(),
};

const book = {
  name: "Fanduel",
};

function App() {
  const [line1, setLine1] = useState({ ...LINE_TEMPLATE });
  const [line2, setLine2] = useState({
    ...LINE_TEMPLATE,
    id: 2,
    adjust: 13,
    price: -112,
  });
  function updateLine1() {
    setLine1({
      ...line1,
      adjust: -5,
      lastUpdate: Date.now(),
    });
  }
  function updateLine2() {
    setLine2({
      ...line2,
      price: -115,
      lastUpdate: Date.now(),
    });
  }

  return (
    <>
      <h1>Vite + React</h1>
      <button onMouseDown={updateLine1}>Update Line1</button>
      <button onMouseDown={updateLine2}>Update Line2</button>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <LineButton key={line1.id}>
        <Book book={book} slot="book" />
        <Line data={line1} slot="line" />
      </LineButton>
      <LineButton>
        <Book book={book} slot="book" />
        <Line data={line2} slot="line" />
      </LineButton>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

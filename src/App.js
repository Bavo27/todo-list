import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Class from './components/Class';

function App() {
  const [page, setPage] = useState("home");

  if (page === "home") {
    return (
      <div className="App">
        <header>Bavo's classes</header>
        <button onClick={() => setPage("comp225")}>Comp 225</button>
        <button onClick={() => setPage("POLI")}>Political Economy</button>
        <button onClick={() => setPage("comp221")}>Comp 221</button>
        <button onClick={() => setPage("Chinese")}>Chinese</button>
      </div>
    );
  }

  if (page !== "home") {
    return <Class {...Class(page)}/>;
  }
}

export default App;

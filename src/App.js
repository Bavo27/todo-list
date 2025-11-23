import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Class1 from './components/Class1';

function App() {
  const [page, setPage] = useState("home");

  if (page === "home") {
    return (
      <div className="App">
        <header>Bavo's classes</header>
        <button onClick={() => setPage("comp225")}>Comp 225</button>
        <button>Political Economy</button>
        <button>Comp 221</button>
        <button>Chinese</button>
      </div>
    );
  }

  if (page === "comp225") {
    return <Class1 />;
  }
}

export default App;

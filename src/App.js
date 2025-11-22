import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Class1 from './components/Class1';

function App() {
  const [currentClass, setCurrentClass] = useState(null);
  return (
    <div className="App">
      <header>Bavo's classes</header>
      <button onClick={() => setCurrentClass("comp225")}>Comp 225</button>
      <button>Political Economy</button>
      <button>Comp 221</button>
      <button>Chinese</button>
      {currentClass === "comp225" && <Class1 />}
    </div>
  );
}

export default App;

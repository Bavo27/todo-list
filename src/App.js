import logo from './logo.svg';
import './App.css';
import React from 'react';
import class1 from './components/Class1';

function App() {
  return (
    <div className="App">
      <header>Bavo's classes</header>
      <button onClick={change}>Comp 225</button>
      <button>Political Economy</button>
      <button>Comp 221</button>
      <button>Chinese</button>
    </div>
  );
}
function change() {
  <class1 />
  }

export default App;

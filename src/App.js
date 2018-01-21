import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="viewScreen"></div>
          <button className="btn">⌫</button>
          <div className="firstRow">
            <button className="btn">C</button>
            <button className="btn">( )</button>
            <button className="btn">%</button>
            <button className="btn">÷</button>
          </div>
          <div className="secondRow">
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn">×</button>
          </div>
          <div className="thirdRow">
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">-</button>
          </div>
          <div className="fourthRow">
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">+</button>
          </div>
          <div className="fifthRow">
            <button className="btn">±</button>
            <button className="btn">0</button>
            <button className="btn">.</button>
            <button className="btn">=</button>
          </div>
        </div>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;

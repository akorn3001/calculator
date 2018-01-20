import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
        <div className="calculator">
          <div className="viewScreen"></div>
          <button>⌫</button>
          <div className="1stRow">
            <button>C</button>
            <button>( )</button>
            <button>%</button>
            <button>÷</button>
          </div>
          <div className="2ndRow">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>×</button>
          </div>
          <div className="3rdRow">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
          </div>
          <div className="4thRow">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </div>
          <div className="5thRow">
            <button>±</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
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

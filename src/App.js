import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    displayValue: '0'
  }
  
  render() {
    const { displayValue } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <div className="viewScreen">{ displayValue }</div>
          <div className="keypad">
            <div className="firstRow">
              <button className="btn btn-clear">C</button>
              <button className="btn btn-parens">( )</button>
              <button className="btn btn-percent">%</button>
              <button className="btn btn-divide">÷</button>
            </div>
            <div className="secondRow">
              <button className="btn btn-7">7</button>
              <button className="btn btn-8">8</button>
              <button className="btn btn-9">9</button>
              <button className="btn btn-multiply">×</button>
            </div>
            <div className="thirdRow">
              <button className="btn btn-4">4</button>
              <button className="btn btn-5">5</button>
              <button className="btn btn-6">6</button>
              <button className="btn btn-subtract">-</button>
            </div>
            <div className="fourthRow">
              <button className="btn btn-1">1</button>
              <button className="btn btn-2">2</button>
              <button className="btn btn-3">3</button>
              <button className="btn btn-add">+</button>
            </div>
            <div className="fifthRow">
              <button className="btn btn-negate">±</button>
              <button className="btn btn-0">0</button>
              <button className="btn btn-decimal">.</button>
              <button className="btn btn-equals">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

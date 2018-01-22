import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    displayValue: '0'
  }
  
  clearDisplay() {
    this.setState({
      displayValue: '0'
    })
  }
  
  inputNum(number) {
    const { displayValue } = this.state;
    
    this.setState({
      displayValue: displayValue === '0' ? String(number) : displayValue + number
    })
  }
  
  inputDecimal() {
    const { displayValue } = this.state;
    
    this.setState({
      displayValue: displayValue.indexOf('.') === -1 ? displayValue + '.' : displayValue
    })
  }
  
  render() {
    const { displayValue } = this.state;
    return (
      <div className="App">
        <div className="calculator">
          <div className="viewScreen">{ displayValue }</div>
          <div className="keypad">
            <div className="firstRow">
              <button className="btn btn-clear" onClick={() => this.clearDisplay()}>C</button>
              <button className="btn btn-parens">( )</button>
              <button className="btn btn-percent">%</button>
              <button className="btn btn-divide">÷</button>
            </div>
            <div className="secondRow">
              <button className="btn btn-7" onClick={() => this.inputNum(7)}>7</button>
              <button className="btn btn-8" onClick={() => this.inputNum(8)}>8</button>
              <button className="btn btn-9" onClick={() => this.inputNum(9)}>9</button>
              <button className="btn btn-multiply">×</button>
            </div>
            <div className="thirdRow">
              <button className="btn btn-4" onClick={() => this.inputNum(4)}>4</button>
              <button className="btn btn-5" onClick={() => this.inputNum(5)}>5</button>
              <button className="btn btn-6" onClick={() => this.inputNum(6)}>6</button>
              <button className="btn btn-subtract">-</button>
            </div>
            <div className="fourthRow">
              <button className="btn btn-1" onClick={() => this.inputNum(1)}>1</button>
              <button className="btn btn-2" onClick={() => this.inputNum(2)}>2</button>
              <button className="btn btn-3" onClick={() => this.inputNum(3)}>3</button>
              <button className="btn btn-add">+</button>
            </div>
            <div className="fifthRow">
              <button className="btn btn-negate">±</button>
              <button className="btn btn-0" onClick={() => this.inputNum(0)}>0</button>
              <button className="btn btn-decimal" onClick={() => this.inputDecimal()}>.</button>
              <button className="btn btn-equals">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

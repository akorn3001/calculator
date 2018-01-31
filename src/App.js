import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    displayValue: '0'
  }

  clearDisplay() {
    this.setState({
      displayValue: '0',
      pressedOperator: false
    })
  }

  inputNumber(number) {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue === '0' ? String(number) : displayValue + number
    })
  }

  inputDecimalPoint() {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue.indexOf('.') === -1 ? displayValue + '.' : displayValue
    })
  }

  inputPercent() {
    const { displayValue } = this.state;

    this.setState({
      displayValue: String(Number(displayValue) / 100)
    })
  }

  negateNumber() {
    const { displayValue } = this.state;

    this.setState({
      displayValue: String(Number(displayValue) * -1)
    })
  }

  parentheses() {

  }

  inputOperation(operator) {
    this.setState({
      pressedOperator: true
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
              <button className="btn btn-percent" onClick={() => this.inputPercent()}>%</button>
              <button className="btn btn-divide" onClick={() => this.inputOperation('/')}>÷</button>
            </div>
            <div className="secondRow">
              <button className="btn btn-7" onClick={() => this.inputNumber(7)}>7</button>
              <button className="btn btn-8" onClick={() => this.inputNumber(8)}>8</button>
              <button className="btn btn-9" onClick={() => this.inputNumber(9)}>9</button>
              <button className="btn btn-multiply" onClick={() => this.inputOperation('*')}>×</button>
            </div>
            <div className="thirdRow">
              <button className="btn btn-4" onClick={() => this.inputNumber(4)}>4</button>
              <button className="btn btn-5" onClick={() => this.inputNumber(5)}>5</button>
              <button className="btn btn-6" onClick={() => this.inputNumber(6)}>6</button>
              <button className="btn btn-subtract" onClick={() => this.inputOperation('-')}>-</button>
            </div>
            <div className="fourthRow">
              <button className="btn btn-1" onClick={() => this.inputNumber(1)}>1</button>
              <button className="btn btn-2" onClick={() => this.inputNumber(2)}>2</button>
              <button className="btn btn-3" onClick={() => this.inputNumber(3)}>3</button>
              <button className="btn btn-add" onClick={() => this.inputOperation('+')}>+</button>
            </div>
            <div className="fifthRow">
              <button className="btn btn-negate" onClick={() => this.negateNumber()}>±</button>
              <button className="btn btn-0" onClick={() => this.inputNumber(0)}>0</button>
              <button className="btn btn-decimal" onClick={() => this.inputDecimalPoint()}>.</button>
              <button className="btn btn-equals" onClick={() => this.inputOperation('=')}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

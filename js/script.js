import Calculator from './Calculator.js';

const computedDisplay = document.querySelector('[data-computed]');
const currentDisplay = document.querySelector('[data-current]');

const calculator = new Calculator(computedDisplay, currentDisplay);

const digits = {
  numberButtons: calculator.$('[data-number]'),
  operatorButtons: calculator.$('[data-operator]'),
  clearButton: calculator.$('[data-clear]'),
  equalButton: calculator.$('[data-equal]'),
  deleteButton: calculator.$('[data-delete]'),
};

calculator.onClick(digits.clearButton, 'clear');
calculator.onClick(digits.deleteButton, 'delete');
calculator.onClick(digits.numberButtons, 'onScreen');
calculator.onKeyDown(document);
calculator.onClick(digits.operatorButtons, 'chooseOperation');
calculator.onClick(digits.equalButton, 'equal');

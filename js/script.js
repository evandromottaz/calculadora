import Calculator from './Calculator.js';

const computed = document.querySelector('[data-computed]');
const current = document.querySelector('[data-current]');

const calculator = new Calculator(computed, current);

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
calculator.onClick(digits.operatorButtons, 'chooseOperation');

export default class Calculator {
  constructor(computed, current) {
    this.computedDisplay = computed;
    this.currentDisplay = current;
    this.clear();
  }

  clear() {
    this.computed = '';
    this.current = '';
    this.operation = undefined;
    this.updateDisplay();
  }

  delete() {
    if (this.lastResult === undefined)
      this.current = this.currentDisplay.innerText.slice(0, -1);
    else this.current = this.current.slice(0, -1);
  }

  equal() {
    this.lastResult = undefined;
    // convert decimal with ',' to '.'
    const lastComputed = String(this.computed).replace(',', '.');
    const current = String(this.current).replace(',', '.');

    if (isNaN(lastComputed) && isNaN(current)) return null;
    switch (this.operation) {
      case '÷':
        this.lastResult = Number(lastComputed) / Number(current);
        break;
      case '+':
        this.lastResult = Number(lastComputed) + Number(current);
        break;
      case '-':
        this.lastResult = Number(lastComputed) - Number(current);
        break;
      case 'x':
        this.lastResult = Number(lastComputed) * Number(current);
        break;
      default:
        return null;
    }
    this.current = this.lastResult;
    this.lastResult = undefined;
    this.operation = undefined;
    this.computed = '';
  }

  dotNumber(number) {
    const stringNumber = String(number);
    // array that will divide before and after '.'
    const intNumber = stringNumber.replace(',', '.').split('.')[0];
    const decNumber = stringNumber.replace(',', '.').split('.')[1];
    let intDisplay;
    if (isNaN(intNumber)) return '';
    else {
      intDisplay = Number(intNumber).toLocaleString('pt-BR');
    }
    if (decNumber != null) return `${intDisplay},${decNumber}`;
    else {
      if (intDisplay === '0' && this.current === '') return '';
      else return intDisplay;
    }
  }

  onScreen(number) {
    if (number === ',' && this.current.includes(',')) return;
    else if (this.operation === undefined && this.lastResult === undefined) {
      this.lastResult = this.current;
      return (this.current = String(number));
    } else if (this.currentDisplay.innerText.length > 18) return null;
    else this.current += String(number);
  }

  sounds(button) {
    let audio;
    if (isNaN(button)) {
      audio = new Audio(`/sounds/${button.innerText}.mp3`);
      if (audio === undefined) return null;
      else audio.play();
    }
  }

  styles(button) {
    this.sounds(button);
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 300);
  }

  onKeyDown(document) {
    document.addEventListener('keydown', ({ key }) => {
      const btnKey = document.querySelector(`[data-btn='${key}']`);
      this.styles(btnKey);
      if (isNaN(key)) {
        switch (key) {
          case '=':
            this.equal();
            break;
          case '/':
            key = '÷';
            break;
          case '*':
            key = 'x';
            this.chooseOperation(key);
            break;
          case '+':
            this.chooseOperation(key);
            break;
          case '-':
            this.chooseOperation(key);
            break;
          case 'Backspace':
            this.delete();
            break;
          default:
            return null;
        }
      } else this.onScreen(key);
      this.updateDisplay();
    });
  }

  onClick(element, method) {
    if (element.length)
      element.forEach((el) =>
        el.addEventListener('click', () => {
          this[method](el.innerText);
          this.styles(el);
          this.updateDisplay();
        }),
      );
    else
      element.addEventListener('click', () => {
        this[method]();
        this.styles(element);
        this.updateDisplay();
      });
  }

  $(element) {
    const query = document.querySelectorAll(element);
    // if a node, return node
    if (query.length > 1) return query;
    // if a element return element
    else return document.querySelector(element);
  }

  chooseOperation(operation) {
    if (this.current === '') return null;
    if (this.computed) {
      this.equal();
    }
    this.operation = operation;
    this.computed = this.current;
    this.current = '';
  }

  updateDisplay() {
    if (this.current.length > 8)
      this.currentDisplay.style.fontSize = 1.5 + 'rem';
    if (this.current.length < 8)
      this.currentDisplay.style.fontSize = 2.5 + 'rem';

    this.currentDisplay.innerText = this.dotNumber(this.current);
    if (this.operation != null)
      this.computedDisplay.innerText = `${this.dotNumber(this.computed)} ${
        this.operation
      }`;
    else this.computedDisplay.innerText = '';
  }
}

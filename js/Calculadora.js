export default class Calculadora {
  constructor() {
    this.display = document.querySelector('.display');
    this.operators = document.querySelector('[data-calc="op"]');
    // this.ctas = document.querySelectorAll('[data-calc="numero"]');
    this.ctas = document.querySelectorAll('button');
  }

  printDisplay(number) {
    this.display.innerText += number;
  }

  doTheMath(math) {
    console.log(math);
  }

  handleClick({ innerText }) {
    const number = Number(innerText);
    if (number || number === 0) {
      this.printDisplay(number);
    } else {
      this.doTheMath(innerText);
    }
  }

  onClick(ctas) {
    ctas.forEach((cta) =>
      cta.addEventListener('click', () => this.handleClick(cta)),
    );
  }

  init() {
    this.onClick(this.ctas);
    return this;
  }
}

// const operadores = document.querySelectorAll('[data-calc="op"]');
// let i = 0;
// let n1 = 0;

// function somar(calculo) {
//   if (i != 0) {
//     calculo += n1;
//   }
//   n1 = calculo;
//   i = 1;
//   console.log('oiii sou eu ' + n1);
// }

// function operacoes() {
//   let calculo = Number(display.innerText);

//   if (this.innerText === '+') {
//     display.innerText = '';
//     return somar(calculo);
//   }
// }

// operadores.forEach((op) => {
//   op.addEventListener('click', operacoes);
// });

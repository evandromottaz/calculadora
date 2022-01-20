export default class Calculator {
  constructor(computed, current) {
    this.computed = computed;
    this.current = current;
  }

  clear() {
    this.computed.innerText = '';
    this.current.innerText = '';
    this.operation = undefined;
  }

  delete() {
    const totalChar = this.current.innerText.length;
    this.current.innerText = this.current.innerText.substring(0, totalChar - 1);
  }

  saveComputed(computed) {
    let saved = computed;
    this.computed.innerText = saved;
  }

  onScreen(leticia) {
    this.current.innerText += leticia;
  }

  onClick(element, method) {
    if (element.length)
      element.forEach((el) =>
        el.addEventListener('click', () => this[method](el.innerText)),
      );
    else element.addEventListener('click', () => this[method]());
  }

  $(element) {
    const query = document.querySelectorAll(element);
    // if a node, return node
    if (query.length) return query;
    // if a element return the element
    else return document.querySelector(element);
  }

  chooseOperation(operation) {
    let saved;
    switch (operation) {
      case '÷':
        if (!this.current.innerText.includes(operation)) {
          saved = operation;
          this.computed.innerText = this.current.innerText;
          this.current.innerText = '';
        } else if (this.current.innerText.includes(operation)) {
        }
        break;
    }
  }

  updateDisplay() {
    this.current.innerText = this.current;
  }
}

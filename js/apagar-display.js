export default function apagarDisplay() {
  let display = document.querySelector('.display');

  const apagar = document.querySelector('[data-calc="c"]');
  const apagarDig = document.querySelector('[data-calc="apagar-digitos"]');

  function limpar() {
    display.innerHTML = '';
  }

  function apagarDigito() {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }

  apagarDig.addEventListener('click', apagarDigito);
  apagar.addEventListener('click', limpar);
}

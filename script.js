function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}

let num1;
let num2;
let op;
let operando = '';

const operators = ['+', '-', '*', '/'];

function operate(num1, num2, op) {
    const operations = {
      '+': add,
      '-': sub,
      '*': mult,
      '/': div
    };
    
    const operation = operations[op](num1, num2);

    return operation;
  }

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
    if (button.id != 'equal'){
      document.getElementById("display").innerHTML += button.id;
    }
      if (!isNaN(button.id) || button.id === '.') {
        operando += button.id;
        if (op) {
          num2 = +operando;
        } else {
          num1 = +operando;
        }
      } else if (operators.includes(button.id)) {
        if (num1 && num2) {
          num1 = operate(num1, num2, op);
          num2 = '';
        }
        op = button.id;
        operando = '';

      } else if (typeof num1 === 'number' && typeof num2 === 'number' && button.id === 'equal') {
        document.getElementById("display").innerHTML = Number(operate(num1, num2, op).toFixed(10));

      } else if (button.id === 'clear') {
        document.getElementById("display").innerHTML = '';
        num1 = '';
        num2 = '';
        op = '';
        operando = '';
      }
    });
  });
  //Faltando para terminar:
  //Adicionar evento que ao passar o mouse pelos botões ele muda de cor
  //Adicionar outro evento que ao clickar e segurar os botões, eles diminuem um pouco de tamanho
  //Mudar o texto dos operadores no display
  //Display a snarky error message if the user tries to divide by 0
  //Fazer o extra credit: fazer o DEL funcionar e adicionar suporte para o teclado
  //Pronto!

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
let lastOperand = '';

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
    
    if (button.id != 'equal' && document.getElementById("display").innerHTML != 'Error: Division by zero'){
      document.getElementById("display").innerHTML += button.id;
    }
      if (!isNaN(button.id) || button.id === '.') {
        lastOperand += button.id;
        if (op) {
          num2 = +lastOperand;
        } else {
          num1 = +lastOperand;
        }
      } else if (operators.includes(button.id)) {
        if (num1 && num2) {
          num1 = operate(num1, num2, op);
          num2 = '';
        }
        op = button.id;
        lastOperand = '';

      } else if (num1 && typeof num2 === 'number' && button.id === 'equal') {
        if (op === '/' && num2 === 0){
            document.getElementById("display").innerHTML = 'Error: Division by zero';
        } else {
            document.getElementById("display").innerHTML = Number(operate(num1, num2, op).toFixed(10));
        }

      } else if (button.id === 'clear') {
        document.getElementById("display").innerHTML = '';
        num1 = '';
        num2 = '';
        op = '';
        lastOperand = '';
      }

      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 200);
    });

    button.addEventListener('mouseover', () => {
      if (button.id === 'del' || button.id === 'clear'){
        button.style.backgroundColor = '#fd5c63';
      } else {
        button.style.backgroundColor = 'lightgreen';
      }
    });

    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'silver';
    });
  });
  
  //Faltando para terminar:
  //Mudar o texto dos operadores no display
  //Fazer o extra credit: fazer o DEL funcionar e adicionar suporte para o teclado
  //Pronto!

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
let disValue;
let temp = true;
let lastResult;
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
        document.getElementById("display").innerHTML += button.id;
        if (!isNaN(button.id) || button.id === '.'){
            //disValue = +document.getElementById("display").innerHTML;
            operando += button.id;
            console.log(operando);
            if (temp){
            num1 = +operando;
            console.log(num1);
            console.log(num2);
            } else {
            num2 = +operando;
            console.log(num1);
            console.log(num2);
            }
        }
        else if (operators.includes(button.id)){
            console.log(button.id);
            //document.getElementById("display").innerHTML = '';
            temp = false;
            op = button.id;
            operando = '';
            //  if (lastResult){
            //     operando = lastResult;
            // }
        }
        else if (typeof num1 === 'number' && typeof num2 === 'number' && button.id === 'equal'){
            console.log(operate(num1, num2, op));
            document.getElementById("display").innerHTML = Number(operate(num1, num2, op).toFixed(10));
            lastResult = operate(num1, num2, op);
            temp = true;
            num1 = lastResult;
        }
        else if (button.id === 'clear'){
            document.getElementById("display").innerHTML = '';
            temp = true;
            num1 = '';
            num2 = '';
            op = '';
            operando = '';
            lastResult = '';
        }
        // else if (button.id === 'del'){
            
        // }
        
    });
    
    });

  //Próximo passo:
  //Quando eu clickar um botão, fazer ele aparecer no display
  //Para isso -> Criar um evento que ao clickar num botão, ele modifica a DOM e aparece no display
  //Próximo passo:
  //Ao clicar num número, esse número é amazenado numa variável, se eu clicar de novo,
  //essa variável é substituída pelo outro número
  //Como posso armazernar o segundo número em outra variável para usar as duas variáveis
  //armazenadas e fazer a operação

  //Adicionar evento que ao passar o mouse pelos botões ele muda de cor
  //Adicionar outro evento que ao clickar e segurar os botões, eles diminuem um pouco de tamanho

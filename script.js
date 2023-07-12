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

  //Adicionar evento, quando eu passo o mouse no botão ele muda de cor
  //Adicionar outro evento, quando eu click no botão ele diminui um pouco de tamanho

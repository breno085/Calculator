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

  //Adicionar evento que ao passar o mouse pelos botões ele muda de cor
  //Adicionar outro evento que ao clickar e segurar os botões, eles diminuem um pouco de tamanho

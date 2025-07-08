const conta = (...args) => {
    console.log(args);
}
conta('+', 1, 20, 30, 40, 50);

/*
const conta = function(operador, acumulador, ...numeros) { // ...numeros é o operador rest (resto). Sempre deve ser deixado por último por representar o resto
    for (let numero of numeros) {
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
    console.log(operador, numeros);
}

conta('+', 1, 20, 30, 40, 50);
*/

/*
// Funções definidas com >function<, possuem uma variável especial chamada arguments que sustenta todos os argumentos enviados
function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcao({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});
*/
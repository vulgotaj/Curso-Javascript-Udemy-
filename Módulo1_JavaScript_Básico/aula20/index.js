const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);




/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/

/*
let a = [1, 2, 3];
let b = [...a]; // Copia o valor de A para B //let b = a;
let c = b

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Felipe');
console.log(c);
*/
// String, number , undefined, null, boolean, symbol? (DADOS PRIMITIVOS)
const nome = 'Luiz' // string
const nome1 = "Luiz" // string
const nome2 = `Luiz` // string 
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para local algum na memória
const sobrenomeAluno = null; // nulo -> não aponta para local algum na memória
const boolean = false; // Boolean = true, false (valor lógico)

console.log(typeof nome, nome);

const a = [1, 2];
const b = a;

console.log (a, b);

b.push(3);

console.log(a, b)
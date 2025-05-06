// return
// retorna um valor
// termina a função

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3); // Nestas linhas, a função está buscando o parâmetro (multiplicador)
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(5));    // Nestas linhas, a função está buscando o parâmetro (n)
console.log(quadriplica(5));

/*
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');

console.log(resto);

function criaPessoa(nome, sobrenome) {
    return {
        nome: nome, sobrenome: sobrenome
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};
*/
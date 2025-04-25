// FOR IN - lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

/*
console.log(pessoa.nome);
console.log(pessoa['nome']);

const frutas = ['Pera', 'Maçã', 'Uva']

for (let i in frutas) {
    console.log(frutas[i])
}
*/
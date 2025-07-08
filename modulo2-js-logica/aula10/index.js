const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

const {endereco: {rua: r, numero: n}, endereco} = pessoa;
console.log(r, n, endereco);
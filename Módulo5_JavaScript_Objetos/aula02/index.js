function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: true, // pode alterar o valor
        configurable: false // configurável (Como por exemplo re-declarar as propriedades e apagar a mesma)
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: true, // pode alterar o valor
            configurable: true // configurável (Como por exemplo re-declarar as propriedades e apagar a mesma)
        },
        preco: {
            enumerable: true, // mostra a chave
            value: estoque, // valor da chave
            writable: true, // pode alterar o valor
            configurable: true // configurável (Como por exemplo re-declarar as propriedades e apagar a mesma)
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 4203
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}
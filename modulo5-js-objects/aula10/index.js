const falar = {
    falar() {
        console.log(`${this.nome} está falando!`)
    }
}

const pessoaPrototype = Object.assign({}, falar);


function criaPessoa(nome, sobrenome) { 
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
p1.falar()
// Factory Function
// Constructor Function
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
        console.log(valor);
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`
        },
        altura: a,
        peso: p,
        get imc() {       // Utilizando este >get< antes da função, ela passa a se comportar como atributo, ou seja, sem a necessidade de por os () na hora de executa-la
            const indice = this.peso / (this.altura ** 2);              
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Felipe de Brito Tajima';
p1.nomeCompleto = 'João Pedro Besteira';
console.log(p1.fala('Falando merda'));
console.log(p1.nomeCompleto);
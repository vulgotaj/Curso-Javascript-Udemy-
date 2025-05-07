// IIFE -> Immediatly invoked function expression
(function (idade, peso, altura){
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome(nome) {
        console.log(criaNome(nome));
    }
    falaNome('Felipe');
    console.log(idade, peso, altura);
})(30, 80, 1.80);
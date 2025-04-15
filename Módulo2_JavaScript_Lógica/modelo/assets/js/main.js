const form = document.querySelector('form');
const button = form.querySelector('button');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = form.querySelector('#input-peso');
    const inputAltura = form.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return
    }
});

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#result');
    resultado.innerHTML = '';
    const p = criaP();

}
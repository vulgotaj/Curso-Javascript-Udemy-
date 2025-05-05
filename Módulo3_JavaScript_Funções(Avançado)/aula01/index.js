// Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oi');
}
falaOi();

// First-class Objects (Objetos de primeira classe)
//  Function expression
const souUmDado = function() {
    console.log('Sou um dado');
}
souUmDado();

//Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um objeto

const obj = {
    falar() {
        console.log('Estou falando');
    }
};
obj.falar();
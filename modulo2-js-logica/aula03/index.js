// If pode ser usado sozinho
// Sempre que uso a palavra else, preciso de um if antes
// Posso ter vários else ifs na checagem

const hora = 12;

if (hora >= 0 && hora <= 11) {
    console.log ('Bom dia');
} else if (hora >= 12 && hora < 18){
    console.log ('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log ('Boa noite');
} else {
    console.log ('Olá');
}


const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
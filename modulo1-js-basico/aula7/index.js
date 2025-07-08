const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura ** 2)
let anoNascimento = 2010 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura.toFixed(2)} de altura, nasceu em ${anoNascimento} e tem um IMC de ${imc}`);
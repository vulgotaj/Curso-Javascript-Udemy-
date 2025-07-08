/*
const h1 = document.querySelector('h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
*/


const data = new Date();
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const diaSemanaTexto = diasSemana[diaSemana];

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const mesTexto = meses[mes];


console.log(diaSemanaTexto, dia, mesTexto, ano, hora, min)

document.querySelector('h1').innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} </br>
                                          ${hora}:${min}`

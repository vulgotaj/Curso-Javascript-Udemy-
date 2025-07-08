
let alunos = ['Luiz', 'Maria', 'João'];
alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos.slice(0, 3));
console.log (alunos.slice(0, -1));

console.log(typeof alunos);
console.log(alunos instanceof Array);


//delete alunos[1]
//const removido = alunos.pop(); // Remove o último item do array
//const removido2 = alunos.shift(); // Remove o primeiro item do array
//console.log(removido);
//console.log(removido2);
//alunos.push('Luiza'); // Adiciona ao final
//alunos.unshift('Alan'); // Adiciona ao início
console.log(alunos); // Exibe alunos
//console.log(alunos[0]); // Exibe Luiz
//console.log(alunos[1]); // Exibe Maria
//console.log(alunos[2]); // Exibe João
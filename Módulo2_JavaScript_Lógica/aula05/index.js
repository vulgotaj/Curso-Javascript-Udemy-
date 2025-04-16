const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
const corUsuario = '';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

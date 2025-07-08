// Promise.all = espera todas as promises executarem e retorna todos os valores na ordem de declaração
// Promise.race = retorna o valor que for executado primeiro, independente da ordem declarada

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string') {
            reject(false);
            return;
            }

            resolve(msg);
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 1000),
    esperaAi('Promise 3', 2000),
    esperaAi('Promise 4', 2000),
];

Promise.race(promises)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function(erro){
    console.log(erro);
  })

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina, ' isso é o resolve (certo)');
  })
  .catch(e => console.log(e, ' isso é o erro'));
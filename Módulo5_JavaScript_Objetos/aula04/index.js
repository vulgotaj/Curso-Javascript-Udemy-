const produto = { nome: 'Produto', preco: 1.8 };

console.log(Object.entries(produto));
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
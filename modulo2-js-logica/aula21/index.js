function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.'); // Lança o erro no sistema
    }

    return x + y;
}

try {
    console.log(soma(1, 'felipe'));
} catch (error) {
    console.log('Algo amigável'); // A parte que aparece para o usuário
}
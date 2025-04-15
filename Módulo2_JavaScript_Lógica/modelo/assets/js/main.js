const form = document.querySelector('form');
const button = form.querySelector('button');
const peso = form.querySelector('#input-peso');
const altura = form.querySelector('#input-altura');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const result = form.querySelector('#result');
    const pesoNum = Number(peso.value);
    const alturaNum = Number(altura.value);
    
    if ((isNaN(pesoNum) || pesoNum <= 0) && (isNaN(alturaNum) || alturaNum <= 0)) {
        result.innerHTML = `Preencha os campos corretamente`;
        result.style.background = 'gray';
        return;
    }

    if ((isNaN(pesoNum) || pesoNum <= 0) && !isNaN(alturaNum)) {
        result.innerHTML = `Peso inválido`;
        result.style.background = 'red';
        return;
    }

    if ((isNaN(alturaNum) || alturaNum <= 0) && !isNaN(pesoNum)) {
        result.innerHTML = `Altura inválida`;
        result.style.background = 'red';
        return;
    }

    const imc = pesoNum / (alturaNum ** 2);
    
    if (!isNaN(pesoNum) && !isNaN(alturaNum)) {
        if (imc < 18.5) {
            result.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`
            result.style.background = 'aqua';
            return;
        } 
        else if (imc >= 18.5 && imc <= 24.9) {
            result.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`
            result.style.background = 'green';
            return;
        }
        else if (imc >= 25 && imc <= 29.9) {
            result.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`
            result.style.background = 'yellow';
            return;
        }
        else if (imc >= 30 && imc <= 34.9) {
            result.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`
            result.style.background = 'orange';
            return;
        }
        else if (imc >= 35 && imc <= 39.9) {
            result.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`
            result.style.background = 'orangered';
            return;
        }
        else if (imc > 40) {
            result.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
            result.style.background = 'red';
            return;
        } 
    } 

});
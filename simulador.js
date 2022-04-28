const consumo = document.getElementById('consumo');
const watts = document.getElementById('watts');
const form = document.getElementById('form-calculo');

const erroConsumo = document.getElementById('erro-consumo');
const erroWatts = document.getElementById('erro-watts');

const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!consumo.value.trim()) {
        erroConsumo.style.display = 'block';
    } else if(consumo.value.trim()) {
        erroConsumo.style.display = 'none';
    }
    
    if (!watts.value.trim()) {
        erroWatts.style.display = 'block';
    } else if(watts.value.trim()) {
        erroWatts.style.display = 'none';
    }

    if(!consumo.value.trim() && !watts.value.trim()) {
        erroConsumo.style.display = 'block';
        erroWatts.style.display = 'block';
    } else if(consumo.value.trim() && watts.value.trim()) {
        const calculoMes = consumo.value / 30;
        const calculoPico = calculoMes / 4.43;
        const calculoPicoMil = calculoPico * 1000;
        const calculoPlacas = calculoPicoMil / watts.value;
        const calculoPlacasDigitos = calculoPlacas.toFixed(2);
        const calculoPlacasArredondar = calculoPlacasDigitos.split('.');
        if(calculoPlacasArredondar[1] > 70) {
            result.innerHTML = `Você vai precisa <span> aproximadamente </span> de <span>${Math.ceil(calculoPlacasDigitos)}</span> Módulos Solares `
        } else {
            result.innerHTML = `Você vai precisa <span> aproximadamente </span> de <span>${Math.floor(calculoPlacasDigitos)}</span> Módulos Solares `
        }
    }
})
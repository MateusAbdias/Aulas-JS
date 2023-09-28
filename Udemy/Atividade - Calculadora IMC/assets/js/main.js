const eventoClique = document.getElementById('btn-calcular');

eventoClique.addEventListener('click', function(Event) { 
    Event.preventDefault();
    calcular();   
});

const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

const calcular = () => {
    const imc = peso.value / (altura.value * altura.value);
    const valorIMC = imc.toFixed(2);
    resultado.innerHTML = valorIMC;
    classificar(valorIMC)
    return;
};

const resultado = document.getElementById('resultadoIMC');
const classificacao = document.getElementById('classificacaoIMC');

const classificar = (valorIMC) => {
    if (valorIMC < 18.5) {
        classificacao.innerHTML = 'Abaixo do peso'
    } else if (valorIMC >18.5 && valorIMC < 24.9) {
        classificacao.innerHTML = 'Peso normal'
    } else if (valorIMC > 25 && valorIMC < 29.9) {
        classificacao.innerHTML = 'Sobrepeso'
    } else if (valorIMC > 30 && valorIMC < 34.9 ){
        classificacao.innerHTML = 'Obesidade grau 1'
    } else if (valorIMC > 35 && valorIMC < 39.9) {
        classificacao.innerHTML = 'Obesidade grau 2'
    } else if (valorIMC > 40) {
        classificacao.innerHTML = 'Obesidade grau 3'
    } else{
        classificacao.innerHTML = 'Preencha os campos corretamente'
    }
}
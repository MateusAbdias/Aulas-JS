// Declaração de função tradicional
function soma(x=0, y=0) { // x e y são parâmetros da função e podemos definir valores padrão para eles
    const resultado = x + y
    return resultado;
}
console.log(soma(2, 2))

const subtracao = function(x=0, y=0) {
    return x - y
};
console.log(subtracao(2, 2))

// Arrow function
const multiplicacao = (x=0, y=0) => {
    return x * y
};

// Arrow function reduzida  
const divisao = (x=0, y=0) => x / y;

// Função factory
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
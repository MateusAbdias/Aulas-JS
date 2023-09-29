// For classico
// Usado geralmente com iteraveis
for (let i = 0; i <= 5; i++) {
    //Bloco de código
    console.log(`Linha ${i}`);
}

// Checar se o numero é par ou impar
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

// Percorrer um array com for classico
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melão'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}:`, frutas[i]);
}

// For in le os indices ou chaves do objeto ou array e não os valores
for (let u in frutas) {
    console.log(u)
    // Se eu quiser acessar os valores do array eu preciso usar o indice
    console.log(frutas[u])
}

// For of le os valores do array e não os indices, os objetos não são iteraveis
const nome_sobrenome = 'Luiz Otávio';
for (let valor of nome_sobrenome) {
    console.log(valor);
}

for (let valor of frutas) {
    console.log(valor);
}

// For each
// O forEach é um método que executa uma função para cada item do array
frutas.forEach(function(valor, indice, array) { // O forEach recebe uma função de callback 
    console.log(valor, indice, array) // Esses são os parametros que o forEach recebe
});
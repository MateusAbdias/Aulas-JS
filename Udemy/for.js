// For classico
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
let a = 'A';
let b = 'B';
let c = 'C';

// Atribuição via desestruturação
//Estou atribuindo os valores de a, b e c para as variáveis que estão dentro do array
[a, b, c] = [1, 2, 3];
console.log(a, b, c);

// Atribuição via desestruturação com arrays setados em variáveis
const numeros = [1, 2, 3];
[a, b, c] = numeros;
console.log(a, b, c);

// Atribuisão trocando valores
let d = 'D';
let e = 'E';
let f = 'F';

console.log(d, e, f);
[d, e, f] = [e, f, d];
console.log(d, e, f);


const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros[0]);
// Podemos atribuir valores vindos de um array para variáveis
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = arrayNumeros;
// O ... restante vai pegar o resto dos valores do array e colocar dentro de uma variável (Rest Operator)
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);

// Podemos ignorar valores do array
const [um, , tres, , cinco, , sete] = arrayNumeros;
console.log(um, tres, cinco, sete);

// O Rest Operator serve também como o Spread Operator, porém, ele é usado dentro de um array
// O Spread Operator é usado fora de um array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3);
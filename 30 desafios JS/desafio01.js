// Escerva uma função que recebe um número qualaquer de númros inteiros como argumentos
// e retore a média aritmética entre esses números.

/*
function mediaNumeros(numeros) {
    let notas = [ ...numeros]
    let numerosTotais = notas.length

    let soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    let media = soma / numerosTotais

    console.log(media)  
    return
}
mediaNumeros([10, 5, 8])

// Mesma função porem reduzida
function main(...numbers) {
  const media = numbers.reduce((accum, num) => accum + num, 0) / numbers.length
  console.log(media)
  return 
}

main(10, 5, 8)
*/

// Utilizando arrow function 
function main(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) / numbers.length;
}

console.log(main(10, 5, 8)); 

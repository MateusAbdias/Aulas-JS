// // O while é usado quando não sabemos o momento que o loop vai parar
// function random(min, max) {
//   const r = Math.random() * (max - min) + min;
//   return Math.floor(r);
// }

// const min = 1;
// const max = 50;
// let rand = random(min, max);

// while (rand !== 10) { 
//     rand = random(min, max);
//     console.log(rand);
// }

// Com o do while o bloco de código é executado pelo menos uma vez e depois é verificado a condição
let contador = 0;

do {
    console.log(contador);
    contador++;
} while (contador < 10){ // Se a condição for falsa ele sai do loop e executa o restante do código depois do while
    console.log('Saiu do loop');
    console.log("restante do Código");
}


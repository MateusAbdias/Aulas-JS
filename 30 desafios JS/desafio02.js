// Escreva uma funçãoq eu recebe um número e retorne uma quantidade equivalente de "chunks" separados por um -
// Não utilize estruturas de repetição

/*
function recursiveChunks(num) {  if (num === 0) {
    return ""
    }

    if (num === 1) {
        return "chunk"
    } else {
        return "chunk-" + recursiveChunks(num - 1)
    }
}
*/

function recursiveChunks(num) {
    return num === 0 ? "" : num === 1 ? "chunk" : "chunk-" + recursiveChunks(num - 1)
}
console.log(recursiveChunks(3))
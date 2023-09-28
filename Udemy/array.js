// Coleção de coisas

const alunos = ['Luiz', 'Maria', 'João'] // Array é um objeto que trabalha com coleções de coisas
// podemos ter uma coleção de diversas coisas, como números, strings, objetos, etc.

const animais = [
    {
        nome: 'Pingo',
        idade: 10,
        tipo: 'cachorro'
    },
    {
        nome: 'Nina',
        idade: 5,
        tipo: 'gato'
    },
    {
        nome: 'Branquinho',
        idade: 2,
        tipo: 'cachorro'
    }
]

animais[0].nome = 'Brock'

console.log(animais[0])
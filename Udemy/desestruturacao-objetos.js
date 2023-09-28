const pessoa = {
    nome: "Mateus",
    sobrenome: "Oliveira",
    idade: 21,
    endereco: {
        rua: "Rua 1",
        numero: 123
    }
};

const idade = pessoa.idade; // Atribuição normal
console.log(idade);

const {nome, sobrenome} = pessoa; // Atribuição via desestruturação
console.log(nome, sobrenome);

// Na desestruturação, o nome da variável deve ser o mesmo nome da propriedade do objeto
// Se quisermos mudar o nome da variável, podemos fazer assim:
const {nome: teste} = pessoa;
console.log(teste);

// Podemos também atribuir valores padrões para as variáveis
const {nomeCompleto = "Não existe", idade: idade2 = 0} = pessoa;
console.log(nomeCompleto, idade2);

// Podemos também desestruturar objetos dentro de objetos
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

// Podemos usar o Rest Operator para pegar o resto das propriedades do objeto
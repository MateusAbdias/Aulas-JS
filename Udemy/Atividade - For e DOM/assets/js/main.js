const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 4'},
    {tag: 'footer', texto: 'Frase 3'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {  // For para percorrer o array
    let {tag, texto} = elementos[i]; // Desestruturação do array por indice
    let tagCriada = document.createElement(tag); // Criação da tag do indice
    tagCriada.innerText = texto;
    div.appendChild(tagCriada); // Adiciona a tag criada dentro da div
}

container.appendChild(div); // Adiciona a div dentro do container   

// O innerText é uma propriedade que manipula o contudo do HTML, ou seja ele trabalha com as tags do HTML
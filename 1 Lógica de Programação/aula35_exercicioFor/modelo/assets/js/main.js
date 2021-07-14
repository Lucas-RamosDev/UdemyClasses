const elementos = [
    {tag: 'p',       texto: 'Frase 1' }, // 0
    {tag: 'div',     texto: 'Frase 2' }, // 1
    {tag: 'footer',  texto: 'Frase 3' }, // 2
    {tag: 'section', texto: 'Frase 4' }, // 3   
]

const container = document.querySelector('.container')// - seleciona a classe "container" no html
const div = document.createElement('div') // - cria a "div" no HTML

for(let i = 0; i <elementos.length; i++){

    const { tag, texto } = elementos[i] // desestruturando o objeto
    
    let tagCriada = document.createElement(tag)
    
    tagCriada.innerHTML = texto // transmite para o HTML

    div.appendChild(tagCriada)
    console.log(tagCriada)
}

container.appendChild(div)
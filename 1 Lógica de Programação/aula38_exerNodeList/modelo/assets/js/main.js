const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body) // pega todos os estilos utilziados no body
const backgroundColorBody = estilosBody.backgroundColor // seleciona a cor do background utilizado no baody
console.log(backgroundColorBody) // mostra a cor utilizada

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody // aplica a cor do background do body nos paragrafos
    p.style.color = '#ffffff' // coloca os paragrafos na cor branca
}
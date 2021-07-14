/*
# Em HTML, pedir para o usuario digitar um numero e depois:
- Mostrar o numero que o usuario digitou;
- A Raiz quadrada desse número;
- Se este número é inteiro;
- Se este número é NaN;
- Mostrar arred. para baixo;
- Mostrar arred. para cima;
- Mostrar duas casas decimais.
*/
const numero = Number(prompt('Digite um número'))

const numeroTitulo = document.getElementById('numero-titulo') // seleciona o elemento ID do HTML
const texto = document.getElementById('texto');// seleciona o elemento ID do HTML

let arredBaixo = Math.floor(numero)   // arredondando para baixo
let arredCima = Math.ceil(numero)     // arredondando para cima

numeroTitulo.innerHTML = numero
texto.innerHTML += `<p> A Raiz quadrada de ${numero} é: <strong>${numero ** 0.5}</strong></p>`
texto.innerHTML += `<p> O número ${numero} é Inteiro?: <strong>${Number.isInteger(numero)}</strong></p>`
texto.innerHTML += `<p> O número ${numero} é NaN?: <strong>${Number.isNaN(numero)}</strong>`
texto.innerHTML += `<p> Arredondando o número ${numero} para baixo, fica: <strong>${arredBaixo}</strong></p>`
texto.innerHTML += `<p> Arredondando o número ${numero} para cima, fica: <strong>${arredCima}</strong></p>`
texto.innerHTML += `<p> O número ${numero} com duas casas decimais, fica: <strong>${numero.toFixed(2)}</strong></p>`




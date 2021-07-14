
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000

const dataInicial = new Date(0);// 01/01/1970 - Timestamp unix ou época unix
const dataA = new Date(0 + tresHoras + umDia);

console.log(dataInicial.toString()) // formato 
console.log(dataA.toString()) // formato 

//- Date(a, m, d, h, m, s, ms) obs: O mês começa do 0 ou seja mês 11 é igual a dezembro
const dataFormatA = new Date(2020, 11, 28, 14, 27, 59)
const dataFormatB = new Date('2020-12-28 15:30:59')

console.log(dataFormatB.toString())

// - CAPTURANDO OS VALORES DAS DATAS
const dataFormatC = new Date('2020-12-28 15:30:59.100')
console.log('Dia', dataFormatC.getDate())
console.log('Mes', dataFormatC.getMonth() + 1) // Mês começa do zero - 0 = Janeiro | 11 = Dezembro
console.log('Ano', dataFormatC.getFullYear())
console.log('Hora', dataFormatC.getHours())
console.log('min', dataFormatC.getMinutes())
console.log('Seg', dataFormatC.getSeconds())
console.log('Ms', dataFormatC.getMilliseconds())
console.log('Dia Semana', dataFormatC.getDay()) // 0 = Domingo | 6 = Sábado


console.log(Date.now()) // faz a contagem dos milesimos desde o unicio (unix) até agora.
console.log(new Date(1609181326836))

//-------------- FUNÇÃO PARA FORMATAR DATA - BRASIL -----------------------------

function formataData(data){
    const dia = zeroAEsquerda (data.getDate())
    const mes = zeroAEsquerda (data.getMonth() + 1)
    const ano = zeroAEsquerda (data.getFullYear())
    const hora = zeroAEsquerda (data.getHours())
    const min = zeroAEsquerda (data.getMinutes())
    const seg = zeroAEsquerda (data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

function zeroAEsquerda (num) { // função para acrescentar o 0 a esquerda em numeros com apenas 1 caractere
    return num >= 10 ? num : `0${num}`
}

const data = new Date() // pega a data e hora atual
const dataBrasil = formataData(data) // armazena a data atual na função feita
console.log(dataBrasil) // exibe a data transformada para BR
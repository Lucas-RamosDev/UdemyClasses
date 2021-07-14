
const cpfOriginal = cpfArray('705.484.450-52')

function cpfArray(cpf){
    const cpfLimpo = cpf.replace(/\D+/g,'') // remove os pontos e traços
    const cpfArray = Array.from(cpfLimpo) // converte string em array
    const cpfVerificacao = cpfArray.slice( 0, 9) // elimina os 2 ultimos digitos
    return cpfVerificacao
}

function cpfTotal(numero){

    const cpfTotal = numero.reduce(function(acumulador, valor, indice){
            if (indice === 0)  {acumulador.push(valor * 10)}
    }, [])
    return cpfTotal
}



console.log(cpfOriginal)
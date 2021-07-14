
function ValidaCPF(cpfEnviado){ //função construtora

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, ''); // Tira os caracteres que NÃO sejam numeros
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false; // verifica se foi digitado um cpf
    if(this.cpfLimpo.length !== 11) return false; // verifica se o cpf tem 11 digitos
    if(this.isSequencia()) return false; // verifica se o cpf digitado tem sequencia de numeros iguais

    const cpfParcial = this.cpfLimpo.slice(0, -2) // para não pegar os 2 ultimos digitos
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    const novoCpf = cpfParcial + digito1 + digito2; // concatena os resultados de cpfparcial + digito1 + digito2

    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial) // tranforma o CPF em array
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (regressivo * Number(valor)) // realiza a multiplicação
        regressivo--; // faz com que o regressivo conte do maior para o menor
        return acumulador
    }, 0); // "0" -> para garantir que o acumulador comece do 0
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); // se o digito for maior que 9 retorna 0 caso contrario retorna digito
};

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52')



if(cpf.valida()) {
    console.log('Cpf válido');
  } else {
    console.log('Cpf inválido');
  }




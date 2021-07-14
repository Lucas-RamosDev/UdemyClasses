
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel

        get: function(){ // mostra apenas o valor do estoque
            return estoquePrivado;
        },

        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Valor de estoque deve ser número')
                return
            }

            estoquePrivado = valor
        }
    });
}

const produto1 = new Produto('Camiseta', 20, 3);

produto1.estoque = 'valor string'
produto1.estoque = 500
console.log(`Você tem em estoque ${produto1.estoque} itens`)

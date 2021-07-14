// defineProperty -> define uma propriedade

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave

        writable: false, // controla se o valor pode ser alterado (true / false)

        configurable: true // define se pode ser configuravel
                           // se tiver false -> não podera reconfigurar nem deletar essa chave
    })

}

const produto1 = new Produto('Camiseta', 20, 3);
produto1.estoque = 50
console.log(produto1)
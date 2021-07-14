// defineProperties -> define varias propriedades de uma vez

function Produto (nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // controla se o valor pode ser alterado (true / false)
        configurable: true // define se pode ser configuravel
                           // se tiver false -> não podera reconfigurar nem deletar essa chave
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    })
}

const produto1 = new Produto('Camiseta', 20, 3);
console.log(produto1)

for(let chave in produto1) {
    console.log(chave)
}
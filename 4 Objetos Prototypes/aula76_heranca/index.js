// Dono de um site e-comerce, ele vende:
// (1) Produto = Camiseta, Caneca, tenis
// (2) Os Produtos receberão "aumento" e "desconto"
// (3) Os Produtos teram opções diferentes - Camiseta = Cor / Caneca = material ; Tenis = marca

//-(1)
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//-(2)
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

//-(3)
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor;
}
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
console.log(camiseta)

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco)
    this.material = material
}
const caneca = new Caneca('caneca', 20, 'plastico')
console.log(caneca)


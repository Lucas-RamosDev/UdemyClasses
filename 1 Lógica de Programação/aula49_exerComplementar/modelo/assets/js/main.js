// -------- #################################### --------
// -------- ### SELECIONANDO AS CLASSES HMTL ### --------
// -------- #################################### --------

const inputCodigo = document.querySelector('.input-codigo');
const inputDescricao = document.querySelector('.input-descricao');
const inputTipo = document.querySelector('.input-tipo');
const btnGravar = document.querySelector('.btn-gravar');
const resultado = document.querySelector('.resultado');

// -------- ######################## --------
// -------- ### AÇÕES REALIZADAS ### --------
// -------- ######################## --------

btnGravar.addEventListener( 'click', function(e) {
    e.preventDefault(); //-interrompe o envio via HTML
    
    criaTarefa(inputCodigo.value += inputDescricao.value += inputTipo.value)

});

// -------- ###################################### --------
// -------- ### FUNÇÃO PARA APLICAR AS TAREFAS ### --------
// -------- ###################################### --------

function criaTarefa(textoInput){
    const liNovo = criaLi();
    liNovo.innerText = textoInput
    resultado.appendChild(liNovo)
}



// -------- ########################## --------
// -------- ### FUNÇÕES DE SUPORTE ### --------
// -------- ########################## --------

function criaLi(){
    const li = document.createElement('li');
    return li;
}
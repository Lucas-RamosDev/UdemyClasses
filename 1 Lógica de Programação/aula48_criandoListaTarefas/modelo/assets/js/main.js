
// -------- #################################### --------
// -------- ### SELECIONANDO AS CLASSES HMTL ### --------
// -------- #################################### --------

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


// -------- ######################## --------
// -------- ### AÇÕES REALIZADAS ### --------
// -------- ######################## --------

// - Função para pegar quando o botão "adicionar tarefa" for clicado
btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return; // Se "input-tarefa" estiver sem valor, não retorna nenhum valor
    criaTarefa(inputTarefa.value)
});

// - Função para pegar a tecla "enter" quando precionada
// - E inserir valor digitado ao pressionar "enter" na "li" no HTML
inputTarefa.addEventListener('keypress', function(e){ 
    //console.log(e.keyCode) // descomente para ver o keycode da tecla desejada (se retirar o ".keycode" vc vê a info completa da tecla)
    if(e.keyCode === 13){ // o numero 13 é o keycode da tecla "enter"
        //console.log('Enter pressionado')
        if(!inputTarefa.value) return; // Se "input-tarefa" estiver sem valor, não retorna nenhum valor
        criaTarefa(inputTarefa.value)
    }
});

// - Função para apagar o elemento criado qd clicar no botão "Apagar"
document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')) { // - se este botão contem a classe "apagar" faz a ação
        //console.log(el.parentElement) // mostra o pai do elemento onde esta o "btn aparagar"
        el.parentElement.remove(); // remove a classe ".li"
        salvarTarefas(); // esta função tambem foi chamada aqui, para qd apagar uma informação tambem ser apagado do DB
    }
});


// -------- ###################################### --------
// -------- ### FUNÇÃO PARA APLICAR AS TAREFAS ### --------
// -------- ###################################### --------

// - Função para inserir o texto digitado na classe "input-tarefas" dentro da classe "li"
function criaTarefa(textoInput) { 
    const liNovo = criaLi();
    liNovo.innerText = textoInput;
    tarefas.appendChild(liNovo);
    limpaInput() ;// - Limpa o input e foca o mesmo
    criaBotaoApagar(liNovo); // - adiciona o botão na classe 'li'
    salvarTarefas();
}


// -------- ########################## --------
// -------- ### FUNÇÕES DE SUPORTE ### --------
// -------- ########################## --------

//- Função para criar "li" (li = lista HTML)
function criaLi(){
    const li = document.createElement('li') 
    return li;
}

//- Função para limpar o "input-tarefa" quando digitado algum valor
//- e selecionar o mesmo campo ('.focus')
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

//- Função para criar um botão apagar na frente o "li" adicionado
function criaBotaoApagar(li){
    li.innerText += ' '; // adiciona um espaço entre o botão e o texto
    
    const botaoApagar = document.createElement('button'); //- cria o botão
    botaoApagar.innerText = 'Apagar'; //- nome do botão

    //botaoApagar.classList.add('apagar')
    botaoApagar.setAttribute('class', 'apagar'); // - outra forma de criar class ou qualquer outro atributo
    li.appendChild(botaoApagar) // - adiciona o botão na classe 'li'
}

//- Função para salvar as tarefas criadas
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li'); //- mostra quanto "li" tem add
    //console.log(liTarefas)
    const listaDetarefas = [];

    for (let tarefaExec of liTarefas){
        let tarefaTexto = tarefaExec.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // substitui a palavra "apagar" em vazio. A função ".trim()"" remove o espaço em branco que fica
        listaDetarefas.push(tarefaTexto); // joga os textos dentro da lista "listaDeTarefas"
    }

    const tarefasJSON = JSON.stringify(listaDetarefas) //- transforma as informações em uma "String" no formato JSON)
    //- lembrando que para salvar em JSON precisa ser "string", por isso convertemos a lista acima em "String"
    localStorage.setItem('tarefasDb', tarefasJSON) //- local onde pode ser salvo as coisas
    //- Para ver onde ficou salvo no navegador entre em -> Inspecionar / aba Application / em Storage / Local Storage
}


//- Função para adicionar as tarefas salvas
function adicionaTarefasSalvas(){
    const tarefasAdd = localStorage.getItem('tarefasDb')
    const listaDeTarefas = JSON.parse(tarefasAdd) //- dessa forma convertemos nossas tarefas para um Array novamente

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    };

}
adicionaTarefasSalvas()


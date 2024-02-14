const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function CriaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText +='';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = ' Apagar';
   btnApagar.setAttribute('class', 'apagar');
   btnApagar.setAttribute('class', 'apagar esta tarefa');
    li.appendChild(btnApagar);
    salvarTarefa();
}    


function criaTarefa(textoInput){
    const li = CriaLi()
    li.innerText= textoInput; 
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    
});
document.addEventListener("click", function (e) {
    const cliqueEm = e.target;

    if(cliqueEm.classList.contains('apagar')){
        cliqueEm.parentElement.remove();

    }
});

function salvarTarefa(){
    const liTarefas = salvarTarefa.querySelectorAll('li');
    const liDeTarefa = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        liDeTarefa.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(liDeTarefa);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefaTexto);
}

function adicionaTarefas(){
    const tarefas = localStorage.getItem( 'tarefas' );
    const listaDeTrefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTrefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefas();
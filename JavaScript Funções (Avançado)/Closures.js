function retornaFuncao(){
    const nome = 'gabriel';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao()); 
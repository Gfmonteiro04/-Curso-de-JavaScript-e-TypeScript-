// IIFE -> Immediately invoked function expression

(function(idade, peso, altura){
    const nome = 'Cristiano';
    const sobrenome = 'Ronaldo';

    function criaNome(nome){
    return nome + '' + sobrenome;
}

function falaNome(){
    console.log(criaNome('Carlinhos'));
}

    falaNome();
    console.log(idade, peso, altura);
   
})(19, 83, 1.86);

(function(){

})();

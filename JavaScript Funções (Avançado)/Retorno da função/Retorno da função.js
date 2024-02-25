//Return
//Retorna um Valor
//Termina a função
/*function soma(a, b){
    return a + b;
}

function soma2(a, b){
    console.log(a + b);
}

soma2(5, 2);*/


/*document.addEventListener('click', function(){
    document.body.style.background = 'red';
});*/

/*function criaPessoa(nome, sobrenome){
    return 	{nome, sobrenome};
}

const p1 = criaPessoa('gabriel', 'monteiro');
const p2 = {
    nome :'ana',
    sobrenome: 'silva'};
console.log(typeof p1);
console.log(typeof p2);*/


/*function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto;
}
const olaMondo = falaFrase('Olá');
const retso = olaMondo('Mundo!');*/

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const Triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(2));
console.log(Triplica(3));
console.log(quadriplica(4));


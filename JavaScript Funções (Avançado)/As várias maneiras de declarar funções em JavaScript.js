// Declaração de função (Function hoisting)

falaOi();
function falaOi(){
    console.log('Olá!');
}

//Frist-class objects (Objetos de primeira classe)
// function expression

const souUmDado = function (){
    console.log('Sou um dado.');
};
//souUmDado();

function executaFuncao(funcao){
    console.log('vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

setInterval(funcaoArrow, 1000); //Executará a cada 1 segundo

// Dentro de um objeto

const obj = {
    falar: function() {
        console.log("Estou falando");
    }
};
obj.falar();
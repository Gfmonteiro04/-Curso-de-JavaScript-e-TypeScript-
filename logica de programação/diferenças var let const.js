/*const verdadeira = true;

//Let tem escopo de bloco { ... bloco }
//Var só tem escopo de função

let nome = "Gabriel";// criando
var nome2 = "Gabriel";

if(verdadeira){
    let nome = 'monteiro'; //criando
    var nome2 = 'rogerio';// redeclarando
    console.log(nome, nome2);

    if(verdadeira){
        var nome2 = 'franklin'; // redeclarada
        let nome = 'outra coisa'
        console.log(nome, nome2);
    }
}
*/

var sobrenome = 'Monteiro';

function falaOi(){
    console.log(sobrenome);
}

falaOi();
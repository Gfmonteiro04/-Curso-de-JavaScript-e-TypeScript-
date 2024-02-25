// Função construtora -> objetos
//Função fabrica -> objetos
//construtora ->Pessoa (new)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ": Olá!");
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Jessica', 'Sabrina');
p2.metodo();

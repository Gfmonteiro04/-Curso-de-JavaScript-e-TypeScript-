const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'silva',  // Adicionando a propriedade sobrenome
    idade: 62,
    profissao: 'programador',
    
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
console.log(`Nova idade: ${pessoa1.idade}`);





/*function criaPessoa (nome, sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };

}

const pessoa1 = criaPessoa('Gabriel', 'Monteiro', 19);
const pessoa2 = criaPessoa('carlinhos', 'Monteiro', 25);
const pessoa3 = criaPessoa('dalva', 'Monteiro', 25);
const pessoa4 = criaPessoa('cleide', 'Monteiro', 25);

console.log(pessoa1.nome,  pessoa2.nome);*/

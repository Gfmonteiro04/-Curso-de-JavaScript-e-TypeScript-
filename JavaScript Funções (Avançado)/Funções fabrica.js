//Factory Functions
function criaPessoa(nome, sobrenome, a, p){
    return{
        nome, sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },


        // Setter
        set nomeCompleto(valor) {
           valor = valor.split('');
           this.nome = valor.shift();
           console.log(valor);
        },
        fala: function(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('luiz', 'Otavio', 1.8, 80);
p1.nomeCompleto = "Carlinhos";
console.log(p1.nome);





/*console.log(p1.nome + '' + p1.sobrenome);
console.log(p1.sobrenome);
p1.imc = 29;
console.log(p1.imc);*/




/*console.log(p1.imc()); 
const p2 = criaPessoa('Carlos', 'Roberto', 1.6, 42);
console.log(p1.fala('falando sobre js'));
console.log(p2.imc());*/
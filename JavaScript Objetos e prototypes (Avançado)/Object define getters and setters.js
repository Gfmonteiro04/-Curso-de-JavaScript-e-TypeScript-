function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        Configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
               throw new TypeError('Mensagem');
            }
            
            estoquePrivado = valor;
        }
    });
   
    }
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}


const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
}

console.log(p1.nome);
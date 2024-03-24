/*const numeros = [5, 50, 80, 1, 2, 3, 4, 7]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 8 === 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0);
console.log(total);*/







const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'João', idade: 45},
    {nome: 'Pedro', idade: 12},
    {nome: 'Júlia', idade: 55},
];
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
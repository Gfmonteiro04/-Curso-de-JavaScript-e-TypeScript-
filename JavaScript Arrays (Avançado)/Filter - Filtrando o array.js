// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos
/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
     
});
console.log(numerosFiltrados);*/


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Joao', idade: 45},
    {nome: 'Pedro',  idade: 12},
    {nome: 'Ana', idade: 59},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoasComMaisDe50);
console.log(pessoasComNomeGrande);
console.log(nomeTerminaComA);

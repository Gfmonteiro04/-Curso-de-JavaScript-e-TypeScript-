//Dobre os números

/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function(valor){
    return valor * 2;
});
console.log(numerosEmDobro);*/

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'João', idade: 45},
    {nome: 'Pedro', idade: 12},
    {nome: 'Júlia', idade: 55},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj =>({idade: obj.idade}));

const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.indice = indice;
    return newObj;
    
    return obj;
});

console.log(nomes);
console.log(idades);
console.log(comIds);

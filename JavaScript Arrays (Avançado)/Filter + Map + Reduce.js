const numeros = [5,50,80,1,2,3,4,5,6,7,11,34,32];
const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(ac, valor){
    return ac + valor;
});
console.log(numerosPares);
//               -5   -4   -3   -2   -1
//                0    1    2    3    4
const numeros = ['1', '2', '3', '4', '5'];
numeros.splice(numeros.length, 0, "carlinhos", "dalva")
console.log(numeros);

// numeros.splice(indice atual, delete, elem1, elem2, elem3);
/*const removidos = numeros.splice(4, Number.MAX_VALUE);
console.log(numeros, removidos);
console.log(Number.MAX_VALUE);*/
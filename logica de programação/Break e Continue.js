const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do{
    let numero = numeros[i];


    if(numero === 2){
        console.log ('pulei o numero 2 ');
        continue;
    }

    if(numero === 5){
        console.log ('pulei o numero 5 ');
        continue;
    }

    
    if(numero === 7){
        i++
        break;
    }

    i++
    console.log(numero);
}while (i < numeros.length)

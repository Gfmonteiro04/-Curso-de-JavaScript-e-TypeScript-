const conta = function (operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador === '*') acumulador *= numero;   // Multiplicação
        if (operador === '/') acumulador /= numero;  // Divisão
        if (operador === '-') acumulador -= numero;  //subtração 
        if (operador === '+') acumulador += numero;   // Adição
        
        
    }

    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50); 





/*function funcao(){
   let total = 0;
   for(let argumento of arguments){
    total += argumento;
   }
    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5);   */ 
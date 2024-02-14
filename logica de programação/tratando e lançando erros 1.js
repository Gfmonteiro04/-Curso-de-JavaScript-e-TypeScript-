function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('Os valores devem ser do tipo number');
}
return x+y; 
}

try{
    console.log(soma(5,'6')); // Erro de Tipo
    console.log(soma(7,8));   // Resultado: 15
    }catch(e){
        console.log(e.message);
    
}


/*try{
    // É executada quando não há erros
    console.log("abri um arquivo");
    console.log("manipulei o arquivo e gerou erro");
    console.log("fechei o arquivo");
} catch (e){
    // É executada quando há erros
    console.log("tratando o error");
}finally{
    //sempre
    console.log("finalizou tudo")
}*/

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('A data precisa ser uma instância da classe Date');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit', second:'2-digit'});

}
try{
const data = new Date('1987/03/25 14:30:00')
const hora = retornaHora();
console.log(hora);
}catch(e){
    // Tratar erro
}finally{
    // Finalizar a execução, independentemente de haver ou não erros
    console.log('Finalizado!');
}

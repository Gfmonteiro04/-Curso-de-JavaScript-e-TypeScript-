function mostraHora(){
    let data = new Date();
 return data.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit', second:'2-digit'});

 
}

const timer = setInterval (function (){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 60000)


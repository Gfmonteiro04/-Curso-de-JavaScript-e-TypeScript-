//? :
const pontuacaousuario = 999;
const nivelUsuario = pontuacaousuario >= 1000 ? 'usuario VIP' : 'usuario normal';
console.log(nivelUsuario);

const corUsuario = 'Pink';
const corPadrao =  corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

/*if (pontuacaousuario >= 1000) {
    console.log('Você é um milionário!');
}else{
    console.log('Voce é pobre');
}*/
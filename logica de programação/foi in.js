const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Monteiro',
    idade: 19
};

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas){
    console.log(`${indice}: ${frutas[indice]}`);
}

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
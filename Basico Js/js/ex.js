const nome = "Gabriel";
const sobrenome = "Monteiro";
const idade = "19";
const peso = "86";
const alturaEmMetros = "1.86";
let imc;
let anodenascimento;

imc = peso / (alturaEmMetros * alturaEmMetros)
anodenascimento = 2019 - idade

console.log(nome, sobrenome, 'tem', alturaEmMetros, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmMetros, 'de altura e seu imc é de', imc);
console.log( nome, "nasceu em", anodenascimento, );
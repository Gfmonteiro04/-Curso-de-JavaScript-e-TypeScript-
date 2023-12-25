/*
&& -> false&& true -> false
|| -> true || false -> true
*/

/*const corUsuario = "vermelho";
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);*/

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || "joãozinho" || c || d || e);
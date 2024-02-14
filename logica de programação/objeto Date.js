/*const treshoras = 60 * 60 *3 * 1000;
const umdia = 60 * 60 * 27 * 1000;
const data = new Date(0 + treshoras + umdia);*/

/*const data = new Date ('2024-01-19 16:09');
console.log('dia', data.getDate());
console.log('Mes', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia semana', data.getDay());
console.log(data.toString());
console.log(Date.now());*/
function zeroaesquerda (num){
    return num >= 10 ? num : `0${num}`;
}


function formatadata(data){
    const dia = zeroaesquerda(data.getDate());
    const mes = zeroaesquerda(data.getMonth() + 1);
    const ano = zeroaesquerda(data.getFullYear());
    const hora = zeroaesquerda(data.getHours());
    const min = zeroaesquerda(data.getMinutes());
    const seg = zeroaesquerda(data.getSeconds());

return `${dia}/${mes}/${ano}/ ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formatadata(data);
console.log(dataBrasil);
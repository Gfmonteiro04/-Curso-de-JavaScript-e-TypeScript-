const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
            case 1:
                return diaSemanaTexto = 'segunda';
                
                case 2:
                diaSemanaTexto = 'terça';
                return diaSemanaTexto;

                case 3:
                diaSemanaTexto = 'quarta';
                return diaSemanaTexto;

                case 4:
                diaSemanaTexto = 'quinta';
                return diaSemanaTexto;

                case 5:
                diaSemanaTexto = 'sexta';
                return diaSemanaTexto;

                case 6:
                diaSemanaTexto = 'sabado';
                return diaSemanaTexto;

                default:
                    diaSemanaTexto = '';
                    return diaSemanaTexto;
    }


    return diaSemanaTexto;
}

function getnomesmes(numeromes){
    let nomemes;

    switch (numeromes){
        case 0:
            nomemes = "Janeiro";
            return nomemes;
        case 1:
            nomemes = "fevereiro";
            return nomemes;
        case 2:
            nomemes= "março" ;
            return nomemes;
        case 3:
                nomemes="Abril" ;
                return nomemes;
        case 4:
                nomemes="maio";
                return nomemes;
        case 5:
                nomemes="junho";
                return nomemes;
        case 6 : 
                nomemes="julho";
                return nomemes;
        case 7:
                nomemes="agosto";
                return nomemes;
        case 8:
                nomemes="setembro";
                return nomemes;
        case 9:
                nomemes="outubro";
                return nomemes;
        case 10:
                nomemes="novembro";
                return nomemes;
        case 11:
                nomemes="dezembro";
                return nomemes;

    }
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

function criadate(data){
    const diaSemana = data.getDay();
    const numeromes = data.getMonth();

    const nomedia = getDiaSemanaTexto(diaSemana);
    const nomemes = getnomesmes(numeromes);

   return( `${nomedia}, ${data.getDate()} de ${nomemes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
}

h1.innerHTML = criadate(data);
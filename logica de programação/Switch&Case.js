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


const data = new Date();
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

/*switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
        case 0:
            diaSemanaTexto = 'segunda';
            break;
            case 1:
            diaSemanaTexto = 'terça';
            break;
            case 2:
            diaSemanaTexto = 'quarta';
            break;
            case 3:
            diaSemanaTexto = 'quinta';
            break;
            case 4:
            diaSemanaTexto = 'sexta';
            break;
            case 5:
            diaSemanaTexto = 'sabado';
            break;
            default:
                diaSemanaTexto = '';
                break;
}

if (diaSemana === 0){
    diaSemanaTexto = "Domingo";
}else if (diaSemana === 1){
    diaSemanaTexto = "Segunda-Feira";
}else if (diaSemana === 2){
    diaSemanaTexto = "Terça-Feira";
}else if (diaSemana === 3){
    diaSemanaTexto = "Quarta-feira";
}else if (diaSemana === 4){
    diaSemanaTexto = "Quinta-feira";
}else if (diaSemana === 5){
    diaSemanaTexto = "Sexta-feira";
}else if (diaSemana === 6){
    diaSemanaTexto = "Sabado";
}else{
    diaSemanaTexto = "";
}*/

console.log(diaSemana, diaSemanaTexto);
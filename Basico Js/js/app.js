  //função para gerar a data atual
  function getDataAtual() {
    let data = new Date();
    diaSemana = "Domingo";
    if (data.getDay() == 0) {
      diaSemana = "Segunda-Feira";
    } else if (data.getDay() == 1) {
      diaSemana = "Terça-Feira";
    } else if (data.getDay() == 2) {
      diaSemana = "Quarta-Feira";
    } else if (data.getDay() == 3) {
      diaSemana = "Quinta-Feira";
    } else if (data.getDay() == 4) {
      diaSemana = "Sexta-Feira";
    } else if (data.getDay() == 5) {
      diaSemana = "Sábado";
    } else {
    }
  }
function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector(`.btn-clear`),

        clearDisplay(){
            this.display.value = "";
        },

        apagaUmCaractere(){
            this.display.value = this.display.value.slice(0, -1);
        },

        resolveEquacao(){
            let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
        },

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();

        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keycode ==="13"){
                   this.resolveEquacao()  
                }
            })  
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUmCaractere();
                }

                if(el.classList.contains('btn-eq')){
                    this.resolveEquacao();
                }

            }.bind(this)); //Faz com que o "this" esteja associado a função de click
        },
        btnParaDisplay(valor){
            this.display.value += valor;

        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
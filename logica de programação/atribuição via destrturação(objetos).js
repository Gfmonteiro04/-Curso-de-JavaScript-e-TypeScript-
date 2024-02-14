
const pessoa = {
    nome: 'Gabriel',
    idade: 25,
    profissao: 'Desenvolvedor'
};

const { nome = '', sobrenome} = pessoa;
console.log(nome, sobrenome);
const pessoa = {
    nome: 'bruno',
    sobreNome: 'serra',
    idade: '31',
    profisao: 'bancario'


};

//forma que seria feito pela mairoria mais dificl
//let nome = pessoa.nome;
//let sobreNome = pessoa.sobreNome;
//let idade = pessoa.idade;
//let profissao = pessoa.profisao;

//modo novo valor função destruction
let { nome, sobreNome, idade, profisao } = pessoa;
console.log(nome, sobreNome, idade, profisao);
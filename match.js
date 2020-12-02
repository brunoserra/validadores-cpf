// interessante para buscar conteudos especificos
const cpf = 'meu cef é 123.456.321-44';


//expressão regular
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(cpf.match(regex));


//rever o codigo esta dando null
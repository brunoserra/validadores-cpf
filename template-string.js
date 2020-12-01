// forma moderna de delcarar variavel é com let
// boas praticas e atalhos no javascript
let meuNome = "Bruno";
let meuSobrenome = "serra";
let minhaProfissao = "bancario"

//sem template string o codigo fica longo
//template string usa``para iniciar 
console.log(`ola meu nome é ${meuNome} ${meuSobrenome} ${minhaProfissao}`); //é possivel fazeroperações dentro do template  template string

console.log(` soma 1 + 1 é igual a ${ 1 + 1 }`);
console.log(`o objeto jason ${{ chave: 'vvalor' }}`);

let meuPbjeto = {
        chave: 'novo valor'
    }
    // declaração a partir de chaves= forma literal
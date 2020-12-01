//ternario serve parafacilitartomada de decisões
// caso contratio usaria !isValid
let isValid = true;

function verify(isValid) {
    if (isValid) {
        return true;
    } else {
        return false;
    }
    console.log(verify(isValid));
}
console.log(verify(isValid));
// resumir essa funçaõ em uma linha de comando
// com ternario 
const result = isValid ? true : false;
let zero = 0;

const numResultado = 0 > 0 ? 0 : -1;
console.log(numResultado);
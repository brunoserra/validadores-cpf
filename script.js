console.log("Jav script carregado");

//criar função

//encapsular funçao
// : indica o contrario da ?

function validaCpf(cpf) {
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;


        }
        console.log(soma);
        //operador ternário unico operador javascript que possui 3 operadores
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        if (resultado = !digitos.charAt) {

        }

        return true;
    }
}


function validar() {
    console.log("Iniciando validação CPF");
    var cpf = document.getElementById('cpf_digitado').value;
    var resultadoValidacao = validaCpf(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = "block";
    } else {
        document.getElementById('error').style.display = "block";
    }




}
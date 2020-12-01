console.log("Jav script carregado");

//criar função

//encapsular funçao

function validaCpf(cpf) {

    return false;
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




var sumar = function (numero1, numero2) {
    var numero1 = document.getElementsByName(`numero1`).value ;
    var numero2 = parseFloat(document.getElementsByName(`numero2`).value);

    var resultado = numero1 + numero2;
    return resultado;
}
alert(sumar()) 
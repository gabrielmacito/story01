$(document).ready(carregou);

function carregou() {

    console.log("cliquei no botão");

    $("#botao").click(clicou)
    function clicou() {

        var numero1 = ($("#numero1").val());
        var numero2 = ($("#numero2").val());

        if (numero1.length != 0 || numero2.length != 0) {
            var num1 = parseInt(numero1);
            var num2 = parseInt(numero2); 
            if (isNaN(numero1) && isNaN(numero2)) {
                alert("O VALOR INFORMADO DEVE SER NUMÉRICO");
            } else {
                var soma = (num1 + num2);
                $(".resultado").html(soma);
            }      
        } else {
            alert("está vazio");
        }

        document.getElementById("numero1").value = "";
        document.getElementById("numero2").value = "";
    }

}

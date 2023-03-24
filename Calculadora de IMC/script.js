function calcular(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = (peso / (altura * altura));
    var IMC_formatado = resultado.toFixed(1)
    var info_texto = document.getElementById("resultado")

    if(IMC_formatado < 18.5){
        info_texto.innerHTML = "A baixo do peso. " + IMC_formatado;
    }else if(IMC_formatado < 24.9){
        info_texto.innerHTML = "Peso ideal. " + IMC_formatado;
    }else if (IMC_formatado < 29.9){
        info_texto.innerHTML = "Excesso de peso. " + IMC_formatado;
    }else if (IMC_formatado < 34.9){
        info_texto.innerHTML = "Obesidade classe 1: " + IMC_formatado;
    }else if (IMC_formatado < 39.9){
        info_texto.innerHTML = "Obesidade classe 2: " + IMC_formatado;
    }else{
        info_texto.innerHTML = "Obesidade classe 3: " + IMC_formatado;
    }
}
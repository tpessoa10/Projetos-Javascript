function calcular(){
    var text = document.getElementById("textarea").value;
    var resultado = text.split(" ").length;
    document.getElementById("resultado").innerHTML = `Você tem ${resultado} palavras`;
}
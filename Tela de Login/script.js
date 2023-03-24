var usuario = "exemplo@email.com"
var password = "1234"

function check_login(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if(usuario == email && password == senha){
        document.location.href = "login.html"
    }else{
        alert("Usuário ou senha incorreto")
        document.getElementById("forget").style.display = "flex"
    }
}
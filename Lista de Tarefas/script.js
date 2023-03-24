document.getElementById("button_add").onclick = function (){
    var text_input = document.getElementById("input_tarefa").value
    var new_task = '<div id="tarefas"><span>'+ text_input +'</span><button onclick ="del()" id="deletar">Del</button></div>'
    if(text_input.length == 0){
        alert('Tarefa vazia, digite alguma tarefa')
    }else{
        document.getElementById("novas_tarefas").innerHTML += new_task
    }


    var num_tarefas = document.querySelectorAll("#deletar")

    for (let index = 0; index < num_tarefas.length; index++) {
        num_tarefas[index].onclick = function(){
            this.parentNode.remove()
        }
        
    }
}
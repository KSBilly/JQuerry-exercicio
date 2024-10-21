const tarefa = document.getElementById("inputTarefa");
const text = document.getElementById("text");
let indice = 0

$(document).ready(function(){
    $("#btn").click(function(){
        //adcionar validação para o campo input

        const vTarefa = tarefa.value;
        ++indice

        $("#conteudo").append(`<div id="${indice}">
            <div class="tarefa"> ${vTarefa }</div>
            <button type="button" class="del" onclick="deletar(${indice})">Deletar</button>
        </div>`);
    });

    $(".tarefa").click(function(){
        $(this).toggleClass("concluida");
    });

    //adcionar preventeDefault
    
    function deletar(id){
        let delet = document.getElementById(id);
        delet.remove();
    }
});



$(".del").click(function(){
    let teste = document.getElementById()
    teste.remove();
    })
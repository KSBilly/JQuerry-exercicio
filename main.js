const tarefa = document.getElementById("inputTarefa");
const text = document.getElementById("text");
let indice = 0

$(document).ready(function(){
    $("#btn").click(function(e){
        e.preventDefault();

        const vTarefa = tarefa.value;

        if (vTarefa.trim () !==""){

        ++indice

        $("#conteudo").append(`<div id="${indice}" class="tarefa-item">
            <div class="tarefa"> ${vTarefa }</div>
            <button type="button" class="del">Deletar</button>
        </div>`);
        } else {
            alert ("Por favor, Preencha o campo TAREFA")
        }
    });

    $("#conteudo").on("click", ".tarefa", function(){
        $(this).toggleClass("concluida");
    });

        $("#conteudo").on("click", ".del", function (){
            $(this).closest(".tarefa-item").remove();
        });
});
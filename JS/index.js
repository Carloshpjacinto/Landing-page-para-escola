var setaDireita = window.document.getElementById("setaDireita")
var setaEsquerda = window.document.getElementById("setaEsquerda")

var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function rolarDireita(){

    leonardo.style = "display:none";

    setaDireita.style = "display:none";

    bruna.style = "display:flex";

    setaEsquerda.style = "display:flex";

}

function rolarEsquerda(){

    bruna.style = "display:none";

    setaEsquerda.style = "display:none";

    leonardo.style = "display:flex";

    setaDireita.style = "display:flex;"
    
}

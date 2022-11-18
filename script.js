
const buttons = document.querySelectorAll("#tabuleiro button")

buttons.forEach(function(i){
     i.addEventListener("click", botaoClicado)
})

function botaoClicado(evt){
    if(evt.target.innerHTML == ""){
        evt.target.innerHTML = jogadorDaVez
    }else {
        return
    }
    vezDoJogadores()
}

let jogadorDaVez = "X"

function vezDoJogadores (evt){
    if(jogadorDaVez == "X"){
        jogadorDaVez = "O"
    }else{
        jogadorDaVez = "X"
    }
}

function ganhador (){
    let posicao = [
        [a1, a2, a3],
        [b1, b2, b3],
        [c1, c2, c3],
        [a1, b1, c1],
        [a2, b2, c2],
        [a3, b3, c3],
        [a1, b2, c3]
    ]
}
console.log(buttons)
function contar() {
    var inicio = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var passo = document.getElementById("passo").value
    var res = document.querySelector("div#resultado")

    if (inicio.length === 0 || fim.length === 0 || passo.length === 0) {
        alert("[ERRO] Exitem campos vazios")
        res.innerHTML = "Impossível contar."
    } else if (parseInt(passo) === 0){
        alert("[ERRO] Passo inválido. Passo 1")
        res.innerHTML = "Contando:<br/>"

        for (var i = parseInt(inicio); i <= parseInt(fim); i++) {
            res.innerHTML += inicio+"👉"
        }
        res.innerHTML += "🏴"
    }else if(parseInt(passo) > 0){
        res.innerHTML = "Contando:<br/>"

        for (var i = parseInt(inicio); i <= fim; i+= parseInt(passo)) {
            res.innerHTML += i+"👉"
        }
        res.innerHTML += "🏴"
    }
}
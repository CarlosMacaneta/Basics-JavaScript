function verificar() {
    var ano = document.getElementById("codAno").value
    var resultado = document.querySelector("div#resultado")

    if (new Date().getFullYear() < ano || ano.length === 0) {
        alert("[ERRO] Informe um ano válido.")
    }else {
        var idade = new Date().getFullYear() - parseInt(ano)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(document.getElementsByName("radGenero")[0].checked){
            genero = "Homem"

            if(idade >= 0  && idade < 10){
                img.setAttribute("src", "img/bebeH.png")
            }else if (idade < 21) {
                img.setAttribute("src", "img/adoH.png")
            }else if(idade < 50){
                img.setAttribute("src", "img/adulto.png")
            }else{
                img.setAttribute("src", "img/idoso.png")
            }
        }else{
            genero = "Mulher"
            if(idade >= 0  && idade < 10){
                img.setAttribute("src", "img/bebeM.png")
            }else if (idade < 21) {
                img.setAttribute("src", "img/adoM.png")
            }else if(idade < 50){
                img.setAttribute("src", "img/adulta.png")
            }else{
                img.setAttribute("src", "img/idosa.png")
            }
        }
        resultado.style.textAlign = "center"
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.<br/>`
        resultado.appendChild(img)
    }
}
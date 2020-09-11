function gerar() {    
    let n = document.getElementById("n").value

    if (n.length !== 0) {
        document.getElementById("gTabuada").innerHTML = ""
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement("option")
            item.text = `${n} x ${i} = ${parseInt(n)*i}`
            item.value = `tab${i}`
            document.getElementById("gTabuada").appendChild(item)
        }
    }else{
        alert("Digite um número.")
    }   
}
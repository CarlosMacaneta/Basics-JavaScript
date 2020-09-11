function load(){
    var data = new Date()
    
    document.getElementById("msg").innerHTML = `Agora são ${data.getHours()} horas.`   
   
    if (data.getHours() >= 0 && data.getHours() < 12) {
        document.getElementById("imagem").src = "img/manha.jpg"
        document.body.style.background = "rgb(109, 60, 56)"
    }else if(data.getHours() >= 12 && data.getHours() < 18){
        document.getElementById("imagem").src = "img/tarde.jpg"
        document.body.style.background = "rgb(123, 146, 173)"
    }else {
        document.getElementById("imagem").src = "img/noite.jpg"
        document.body.style.background = "rgb(96, 72, 44)"
    }
}
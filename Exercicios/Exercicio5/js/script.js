let n = document.getElementById("valor")
let list = document.getElementById("numSel")
let nums = []

function isNumber(num){
    if(parseInt(num) >= 1 && parseInt(num) <= 100){
        return true
    }else{
        return false
    }
}

function existe(lista, num){
    if (lista.indexOf(parseInt(num)) !== -1) {
        return true
    }else{
        return false
    } 
}

function add() {    
    document.querySelector("div#res").innerHTML = ""
    if(n.value.length !== 0){
        if (isNumber(n.value) && !existe(nums, n.value)) {
            nums.push(parseInt(n.value))
            let item = document.createElement("option")
            item.text = `Valor ${n.value} adicionado`
            item.value = `num${n.value}`
            list.appendChild(item)
        }else if(!isNumber(n.value)){
            alert("O numero deve ser maior ou igual a 1 ou menor ou igual a 100")
        }else if(existe(nums, n.value)){
            alert("O numero ja existe")
        }
    }else{
        alert("Digite um número")
    }
}

function result(){
    if(nums.length !== 0){
        let soma = 0
        let maior = nums[0]
        let menor = nums[0]

        for (const key in nums) {
            soma += nums[key]
            if(nums[key] > maior)
                maior = nums[key]
            if(nums[key] < menor)
                menor = nums[key]
        }

        document.querySelector("div#res").innerHTML = `<p>Ao todo, `+
        `temos ${nums.length} numeros registados.</p>`+
        `<p>O maior valor informado foi ${maior}</p>`+
        `<p>O menor valor informado foi ${menor}</p>`+
        `<p>Somando todos os valores, temos ${soma}<?>`+
        `<p>A média dos valores digitados é ${soma / nums.length}</p>`
    }else{
        alert("Adicione valore a lista.")
    }
}
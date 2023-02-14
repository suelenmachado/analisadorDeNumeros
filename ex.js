let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >=1 && Number(n)<=100){
        return true
    }else{
        return false
    }

}


function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value)&& !inLista(num.value, valores)){ 
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=""


    }else{
        window.alert('valor invalido ou ja existe')
    }

    num.value = ""
    num.focus()
}


function finalizar(){
    if(valores.length ==0){
        window.alert('adicione valores')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos]> maior)
            maior = valores[pos]
            if(valores[pos]< menor)
            menor = valores[pos]
        }

        media = soma / total



        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo, temos ${total} elemento(s) cadastrados</p>`
        res.innerHTML += `<p> O maior valor informador foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informador foi ${menor}</p>`
        res.innerHTML += `<p> A Soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p> A Média de todos os valores é ${media}</p>`



    }
}


var teste = 8
teste *= 2
console.log(teste)
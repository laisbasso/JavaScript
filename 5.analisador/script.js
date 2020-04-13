var val = []
var soma = 0
var media = 0

function add(){
    var num = document.querySelector('input#num')
    var n = Number(num.value)
    var lista = document.querySelector('select#lista')
    var res = document.querySelector('p#res')
    res.innerHTML=''

    if (num.value == 0 || n < 1 || n > 100 || val.indexOf(n) != -1){
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        val.push(n)
        soma = soma + n
        var salvo = document.createElement('option')
        lista.appendChild(salvo)
        salvo.innerHTML = `Valor ${n} adicionado.`
    }
    num.value = ""
    num.focus()
}

function fim(){
    if (val.length == 0){
        alert('Adicione valores antes de finalizar.')
    } else {
        res.innerHTML=''
        val.sort((a,b) => a-b)
        var r = document.createElement('p')
        res.appendChild(r)
        r.innerHTML = `<pre>
        ${val.length} valores cadastrados.
        ${val[0]} é o menor valor.
        ${val[(val.length)-1]} é o maior valor.
        ${soma} é a soma de todos os valores.
        ${(media = soma / val.length).toFixed(2)} é a média de todos os valores.</pre>`
    }
}
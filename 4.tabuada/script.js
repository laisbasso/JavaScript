function gerar(){
    var num = document.querySelector('input#num')
    var n = Number(num.value)
    var lista = document.querySelector('select#lista')

    if (num.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        lista.innerHTML = ''
        for (c = 1; c <= 10; c++){
            op = document.createElement('option')
            lista.appendChild(op)
            op.innerHTML = `${n} x ${c} = ${n*c}`
        }
    }
}
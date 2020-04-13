function contar(){
    var n1 = document.querySelector('input#ini')
    var n2 = document.querySelector('input#fim')
    var n3 = document.querySelector('input#pas')
    var res = document.querySelector('p#res')

    var ini = Number(n1.value)
    var fim = Number(n2.value)
    var pas = Number(n3.value)

    if (n1.value.length == 0 || n2.value.length == 0){
        res.innerHTML = 'Impossível contar!'

    } else {

        if (pas <= 0){
            alert('Passo inválido! Considerando Passo 1:', onclick=(pas=1))
        }

        res.innerHTML = 'Contando:'
        var con = document.createElement('p')
        con.setAttribute('id', 'con')
        res.appendChild(con)
        var contagem = []
       
        if (ini < fim){
            for(ini; ini <= fim; ini += pas){
            var adicionar = contagem.push(` ${ini}`)
        }}else{
            for(ini; ini >= fim; ini -= pas){
            var adicionar = contagem.push(` ${ini}`)
        }}
        
        con.innerHTML = `${contagem.join(' &#128073')} &#128681`
    }

}
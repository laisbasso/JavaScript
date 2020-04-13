function ver(){
    var bom = document.getElementById('bom')
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerText = `Agora são ${hora} horas.`

    if (hora > 5 && hora < 12){
        document.body.style.background = '#d5c1b6'
        bom.innerText = 'Bom dia!'
        foto.src ='manha.png'

    } else if (hora >= 12 && hora < 19){
        document.body.style.background = '#e1855c'
        bom.innerText = 'Boa tarde!'
        foto.src = 'tarde.png'

    } else {
        document.body.style.background = '#382403'
        bom.innerText = 'Boa noite!'
        foto.src = 'noite.png'
    }
}
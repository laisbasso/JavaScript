function ver(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector('input#nasc')
    var res = document.querySelector('div#res')
    var idade = ano - Number(nasc.value)

    if (nasc.value.length == 0 || Number(nasc.value) > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
        var sex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemh.png')
            }else if(idade < 50){
                img.setAttribute('src', 'homem.png')
            }else{
                img.setAttribute('src', 'idoso.png')
            }
        }else{
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovemm.png')
            }else if(idade < 50){
                img.setAttribute('src', 'mulher.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Você é ${genero} com ${idade} anos.`
        img.style.marginTop= '25px'
        res.appendChild(img)
    }
}
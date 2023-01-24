function verificar(){
    var fpeso = document.getElementById('txtpeso').value 
    var faltura = document.getElementById('txtaltura').value/100
    var res = document.querySelector('div#res')

    if (fpeso == 0  || Number(faltura) == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var imc = fpeso/faltura **2 
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            
            if(imc < 18.5){
                res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} e você está abaixo do peso <br>`

                img.setAttribute('src', 'imagens/homem.magro.png')
               
            } else if (imc > 18.5 && imc < 24.9) {
                res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} e você está com o peso normal <br>`
                img.setAttribute('src', 'imagens/homem.padrao.png')
            } else {
                res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} e você está acima do peso <br>`
                img.setAttribute('src', 'imagens/homem.acimadopeso.png')
            }
        } if (fsex[1].checked){

            if(imc < 18.5){
                res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} e você está abaixo do peso <br>`

                img.setAttribute('src', 'imagens/mulher.magra.png')
               
            } else if (imc > 18.5 && imc < 24.9) {
                res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} e você está com o peso normal <br>`
                img.setAttribute('src', 'imagens/mulher.padrao.png')
            } else {
                res.innerHTML = `Seu IMC é de ${imc.toFixed(2)} e você está acima do peso <br>`
                img.setAttribute('src', 'imagens/mulher.acimadopeso.png')
            }
        }
        res.appendChild(img)
    }
}
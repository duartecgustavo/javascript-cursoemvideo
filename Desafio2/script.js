function verificar(){
    var nascimento = document.getElementById('nascimento')
    var newDate = new Date()
    var anotual = newDate.getFullYear()

    var idade = anotual - nascimento.value
    var res = document.getElementById("res")

    var msg = document.getElementById('msg')  


    if (nascimento.value.length == 0 || nascimento.value > anotual ){
        alert("Digite seus dados corretamente!")
    }else{ 
        var sexo = document.getElementsByName("radsex")
        
        var img = document.getElementById('img')
        var genero = 'Masculino'
        if(sexo[0].checked){
            if (idade > 0 && idade <12){
                img.src=('menino.png')
            }else if (idade < 21){
                img.src=('jovemh.png')
            }else if (idade < 50){
                img.src=('adulto.png')
            }else{
                img.src=('velho.png')
            }
        }else if(sexo[1].checked){
            var genero = 'Feminino'
            if (idade > 0 && idade <12){
                img.src=('menina.png')
            }else if (idade < 21){
                img.src=('jovemm.png')
            }else if (idade < 50){
                img.src=('adulta.png')
            }else{
                img.src=('velha.png')
            }
        }
        msg.innerText=(`Você tem ${idade}anos e seu sexo é ${genero}.`)
    }
}
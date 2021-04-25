function carregar(){
    let msg = document.getElementById("hora");
    let data = new Date();
    let hora = data.getHours();
    msg.innerText=`Agora são ${hora} horas.`

    let img = document.getElementById("img")
    
  if (hora > 0 && hora < 6){
        img.src= './madrugada.jpg'
    }else if (hora >= 6 && hora < 12){
        img.src= './manha.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to right, #52527a,27dfa7);'
    }else if (hora >= 12 && hora < 18){
        img.src= './dia.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to right, #52527a,27dfa7);'
    }else if (hora >= 18 && hora < 24){
        img.src= './noite.jpg'
        document.body.style.backgroundImage = 'linear-gradient(to right, rgb(65, 153, 95),rgb(17, 56, 78))'
    }else{
        img.src= './madrugada.jpg'
    }
    console.log(hora)
}


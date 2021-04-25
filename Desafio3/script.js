function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Adicione um valor para todos os campos.')
    } else {
        res.innerHTML = 'contando..'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

    if ( p <= 0){
        alert('Passo 0 invalido! Considerando passo como 1.')
        p = 1
    }
    if (i <= f ){
        for(let c = i;c <= f;c += p) {
            res.innerHTML += `${c} \u{1F449} `    
        }  
    } else {
        for(let c = i;c >= f;c -= p) {
            res.innerHTML += `${c} \u{1F449} `    
        }  
    }
        res.innerHTML += `\u{1F499}`
    }
}
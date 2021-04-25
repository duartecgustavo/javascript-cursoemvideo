function executar(){
        var number = document.getElementById('num')
        var res = document.getElementById('seltab')
    
        if (number.value.length == 0 || number.value <= 0){
            alert('Adicione um valor maior que 0.')
        } else {
            res.innerHTML = 'contando..'
    
            let n = Number(number.value)
            let f = 10;
            let p = 1;
    
            for(let c = 1;c <= 10;c++) {
                let conta = (n*c)
                let item = document.createElement('option')
                item.text += `${n} x ${c} = ${conta}` 
                res.appendChild(item)
            }  
        } 
    }
    
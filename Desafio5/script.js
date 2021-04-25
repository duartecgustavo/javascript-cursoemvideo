var inputValue = document.getElementById('inputValue');
var selectNumbers = document.getElementById('select');
var divRespostas = document.getElementById('respostas')
var sunValor = 0;
var arrayValues = [];


isNumero = (num) => {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

inLista = (num, list) => {
    if (list.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

adicionar = () => {
    if (isNumero(inputValue.value) == false) {
        alert('Valor invalido!')
    } else if (inLista(inputValue.value, arrayValues) == true) {
        alert('Valor já cadastrado na lista!')
    } else {
        let valueNumber = Number(inputValue.value)
        let option = document.createElement('option')
        option.text += `Adicionado numero ${valueNumber}`
        selectNumbers.appendChild(option)
        arrayValues.push(valueNumber)

        // Caso adicione um novo numero, o que esta aparecendo na 'divRespostas' sea zerado
        divRespostas.innerHTML = ''
    }
    inputValue.value = '';
    inputValue.focus()
}

demonstrar = () => {

    if (arrayValues.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        qtdNumbers = () => {
            let qtdNumbers = arrayValues.length
            divRespostas.innerHTML += `<p>Ao todo temos ${qtdNumbers} numeros cadastrados!</p>`
        }
        maxNumber = () => {
            let maxNumber = Math.max(...arrayValues)
            divRespostas.innerHTML += `<p>O maior numero é ${maxNumber}!</p>`
        }
        minNumber = () => {
            let minNumber = Math.min(...arrayValues)
            divRespostas.innerHTML += `<p>O menor numero é ${minNumber}!</p>`
        }
        sunNumbers = () => {
            for (let valor in arrayValues) {
                sunValor += arrayValues[valor]
            }
            divRespostas.innerHTML += `<p>A soma de todos os numeros é igual à ${sunValor}!</p>`
            return (
                sunValor
            )
        }
        medNumbers = (sunValor) => {
            let medNumbers = sunValor / (arrayValues.length)
            divRespostas.innerHTML += `<p>A média detodos os numeros é igual à ${medNumbers}!</p>`

        }
        qtdNumbers()
        maxNumber()
        minNumber()
        sunNumbers()
        medNumbers(sunValor)
    }
}
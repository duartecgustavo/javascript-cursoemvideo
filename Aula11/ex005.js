let data = new Date();
let diaSem = data.getDay()

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/

console.log(diaSem)

switch (diaSem){
    case 0:
        console.log('Dominguera')
        break
    case 1:
        console.log('Segunda Feira')
        break
    case 2:
        console.log('Terça Feira')
        break
    case 3:
        console.log('Quarta Feira')
        break
    case 4:
        console.log('Quinta Feira')
        break
    case 5:
        console.log('Sexta Feira')
        break
    case 6:
        console.log('Sabado Feira')
        break
    default:
        console.log('Ta errado isso ai hein.')
        break
}
let un = [1, 5, 2, 4, 1]

// for (let p = 0; p < un.length; p++){
//     // console.log(`Na posição ${o} o numero é ${un[p]}`)
//     console.log(`Na posição ${p} o numero é ${un[p]}`)
// }

for(let pos in un){
    console.log(`Na posição ${pos} o numero é ${un[pos]}`)
}

console.log(un.indexOf(10))
let  valor = un.indexOf(1)
if(valor == -1){
    console.log('O valor não existe na tabela;')
}else{
    console.log(`O valor tal esta na posição ${valor};`)
}
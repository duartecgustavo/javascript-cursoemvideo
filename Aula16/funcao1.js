function parimp(params){
    if (params%2 == 0){
        console.log(`O numero ${params} é par!`)
    }else{

        console.log(`O numero ${params} é impar!`)
    }
}

function soma(n1=0, n2=0){
    return (
        n1+n2
    )
}

soma2 = (n1=0, n2=0) => {
    return (
        n1+n2
    )
}

console.log(parimp(5))
console.log(soma(5, 5))
console.log(soma2(5))
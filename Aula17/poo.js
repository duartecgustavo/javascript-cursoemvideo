let amigo = {
    nome:'josé',
    sexo:'Masculino',
    idade:18,
    peso:76.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}


amigo.engordar(2)
console.log(amigo.nome, amigo.peso)
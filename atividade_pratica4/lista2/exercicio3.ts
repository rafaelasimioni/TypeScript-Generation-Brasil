import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>([]);


for(let i = 1; i <= 10; i++){
    let num = readlinesync.questionInt(`Digite o ${i} numero: `)
    numeros.add(num)  
}


let ordenados = Array.from(numeros).sort((a, b) => a - b); //transforma em array


console.log('Listar dados do Set:')

for (let numeros of ordenados){
    console.log(numeros)
}

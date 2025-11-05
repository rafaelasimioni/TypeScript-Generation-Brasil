import readlinesync = require("readline-sync");

const cores: Array<string> = Array<string>();

for (let i = 1; i <=5; i++){
    let cor =  readlinesync.question(`Digite a ${i} cor: `)
    cores.push(cor)
}

console.log('Listar todas as cores:')

for (let cor of cores){
    console.log(cor)
    
}


console.log(`\nOrdenar as cores\n${cores.sort().join('\n')}`)






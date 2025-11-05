import readline from 'readline-sync';
import {Queue} from "./Queue";

const fila = new Queue<string>();
let continuar = true
let contagem = 0

while(continuar){

    console.log(
        '\n++++++++++++++++++++++++++++++++++++++++\n',
        '1 - Adicionar novo cliente na fila\n',
        '2 - Listar todos clientes na fila\n',
        '3 - Chamar uma pessoa da fila\n',
        '0 - Finalizar\n',
        '++++++++++++++++++++++++++++++++++++++++\n' );

    let opcao = readline.questionInt('\nQual sua escolha? ');

    switch(opcao){
        //adicionar
        case (1):
            let nome = readline.question('\nQual seu nome? ');
            fila.enqueue(nome);
            contagem+=1
                if (fila.contains(nome)){
                  console.log('\nNome adicionado com sucesso!\n');}
        break;

        //listar todoa da fila
        case (2):
            if (contagem == 0){
                console.log('\nA fila está vazia!\n');
            }
            else if(contagem >=1){
                console.log('\nLista de clientes: ')
                fila.printQueue();
            }
             
        break;

        //chamar uma pessoa da fila
        case(3):
            if(contagem >= 1){
                console.log(`\nComparecer ao balcão:\n${fila.peek()}`);
                fila.dequeue();
                contagem-=1;}

            else if(contagem == 0){
                console.log('Sem clientes.')
            }
        break;

        //finalizar
        case(0):
            console.log('\nAté a próxima!\n');
            continuar = false;
        break;

        default:
            console.log('\nOpção inexistente!\n');
        break;
}
}




  





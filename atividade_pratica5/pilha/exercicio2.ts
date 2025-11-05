import readline from 'readline-sync';
import {Stack} from "./Stack";

const pilha = new Stack<string>(); 
let continuar = true;
let contagem = 0;

while(continuar){
    console.log(
        '\n++++++++++++++++++++++++++++++++++++++++\n',
        '1 - Adicionar novo livro na pilha\n',
        '2 - Listar todos livros da pilha\n',
        '3 - Retirar um livro da pilha\n',
        '0 - Finalizar\n',
        '++++++++++++++++++++++++++++++++++++++++\n' );

    let opcao = readline.questionInt("\nEscolha sua opcao: ");

    switch(opcao){

        case 1: 
            let titulo = readline.question('\nQual titulo deseja adicionar? ');
            pilha.push(titulo);
            contagem +=1;

            if(pilha.contains(titulo)){
                console.log('Seu livro foi adicionado com sucesso!');}
        break;

        case 2:
            if (contagem == 0){
                console.log('\nNenhum livro encontrado na pilha.');
            }
            
            else if(contagem >=1){
                console.log('\nPilha de livros: ');
                pilha.printStack();
            }
        break;

        case 3:
            if (contagem == 0){
                console.log('Nenhum livro para ser retirado.');
            }
            else if(contagem >=1){
                console.log(`O livro "${pilha.peek()}" foi retirado da pilha`);
                pilha.peek();
                pilha.pop();
                contagem-=1;   
            }
        break;

        case 0:
            console.log('Boa leitura :)')
            continuar = false;   
        break;
        
        default:
            console.log('Opção inexistente')
    }
}
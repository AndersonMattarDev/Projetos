
// Estrutura de repetição 
// for
//let 1 cria uma variavel no caso i
// i > 0 cria uma condição nesse caso enquanto i for maior que 0
// nesse caso decrementa 1 de i a cada rodada, mais poderia incrementar

/*for(let i = 100; i > 0; i--){
    if (i === 50){
        break;
    } 
    console.log(i)
}*/
//break - para a execução do loop
//continue - pula a execução do momento
//nesse caso pula o numero atribuido em if e continua ate o fim 
for(let i = 10; i > 0; i--){
    if (i === 5){
        continue;
    } 
    console.log(i)
}
// Funções aceitam qualquer tipo de dado como argumento
/*function imprimirDado (dado){
    console.log(dado);
}
imprimirDado(10)
imprimirDado('oie')*/


//callback
function imprimirDado (dado){
    console.log('Outras Tarefas!')
    console.log(dado());// aqui é ralizado o callbak ou chamar a função de volta
}
//Envio essa função como argumento para outra função --> Isso é callback depois de um tempo a função é chamada de volta
imprimirDado(function (){
    return 'Olá Mundo'
})
// Aula sobre setTimeout
// Roda uma função depois de X milisegundos 

const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log('Mostar!')

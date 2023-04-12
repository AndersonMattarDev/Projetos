/**
 * Promise
 *
 * A promessa de que algoirá acontecer
 * Poderá dar certo ou errado,
 * mas irá acontecer
 **/

// Nesse caso retorna se a promessa der certo
/*console.log('Pedir Uber!')
const promessa = new Promise((resolve, reject) => {
    return resolve('Carro chegou!')
}) 

console.log('Aguardando...')

promessa.then(result => console.log(result))*/

// Neste caso retorna caso a promessa não seja cumprida 

/*console.log('Pedir Uber!')
const promessa = new Promise((resolve, reject) => {
    return reject('Perdido negado!')
}) 

console.log('Aguardando...')

promessa.then(result => console.log(result)).
catch(erro => console.log(erro))*/

// Usando os dois no mesmo codigo

let aceitar = true

console.log('Pedir Uber!')
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('Pedido aceito!')
}

return reject('Pedido negado!')
}) 

console.log('Aguardando...')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('Finalizada!')) // Dando certo ou errado aparece
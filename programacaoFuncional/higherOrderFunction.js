// Exemplo com .map JS
const numbers = [2, 4, 6, 8, 16, 32]
const square = n => n * n
const squaredNumber = numbers.map(square)
console.log(numbers.map(square))

// Exemplo de um retorno de função
// (Curryng ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)

pause(600) (() => console.log('Waiting 600ms'))

const wait200 = pause(200) 
const wait5000 = pause(5000)

wait200(() => console.log('Waiting 200ms'))
wait5000(() => console.log('Waiting 5s'))
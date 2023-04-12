// Aula sobre clearTimeout
// Ele cancela um timeOut 

const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)
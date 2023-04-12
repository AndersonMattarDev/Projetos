// Aula sobre clearInterval
// Cancela um setInterval registrado

const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)


setTimeout(() => clearInterval(interval), 3000) // Ao invés de cancelar imediatamente o interval, cancela depois de X milisegundos

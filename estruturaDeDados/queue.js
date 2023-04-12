// Passo 1: Modelando
class Queue{
    constructor(){
        this.data = []
    }
    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }
    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila`)
    }
}


// Passo 2: Utilizando
const fila = new Queue()
fila.enqueue('Anderson')
fila.enqueue('Moreno')
fila.enqueue('Mattar')
fila.dequeue()
fila.dequeue()
fila.dequeue()
// Adicionando dados



// Remover 

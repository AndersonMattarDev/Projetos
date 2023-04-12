const {EventEmitter} = require('events')
const ev = new EventEmitter()
//Aqui o evento está sendo ouvido ou ligado (on)
//ev.on('saySomething', (message) => {
  //  console.log('Eu ouvi você!:'  ,message)
//})

//Aqui nao importam os outros disparos, o evento sera ouvdo uma unica vez!
ev.once('saySomething', (message) => {
    console.log('Eu ouvi você!:'  ,message)
})

//aqui estou emitindo um evento (mas preciso ouvir o evento ou nada acontesse)
ev.emit('saySomething', "Anderson")
ev.emit('saySomething', "Moreno")
ev.emit('saySomething', "Mattar")

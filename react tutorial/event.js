//we require the event module
const EventEmitter = require('events')

//we listen then we emit
const customEmmiter = new EventEmitter()
//response id the name of the event
customEmmiter.on("response", () => {
    console.log(`data recived `)
})
//we can have as many events
customEmmiter.on("response", () => {
    console.log(`mone other loic`)
})
customEmmiter.emit('response', 'john' , 34)
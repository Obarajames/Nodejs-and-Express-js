const { log } = require("console")
const os = require("os")
//info about current user 
const user = os.userInfo()
console.log(user)

//method return the system uptime in seconde
console.log(`the system uptime ${os.uptime()} seconds`)

console.log( {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
})

//path module
const path = require("path")
console.log(path.sep)
console.log(path.join)
console.log(path.basename)
console.log(path.resolve)

//file system fs
const fs = require('fs')
console.log(fs.readFileSync("./first.txt"))
console.log(fs.writeFileSync("./second.txt", "writ"))
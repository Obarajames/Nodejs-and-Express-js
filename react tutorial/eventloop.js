/* const {readFile} = require("fs")
const { result } = require("lodash")

console.log('start a first task')

readFile("./first.txt", 'utf-8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log("start next task")
 */

/* 1
console.log('first')
setTimeout(() =>{
    console.log('second')
}, 0)
console.log("third") */

/* 2 
setInterval(() => {
    console.log('hello')
} , 2000)
console.log('i will run first') */

/* 3 server  */

const http = require("http")

const server = http.createServer((req,res) => {
    console.log('request event')
    res.end('hello')
    
})
server.listen(5000, () => {
    console.log('server listening on port 5000')
})
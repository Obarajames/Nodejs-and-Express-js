/* //sync approch
const fs = require('fs')
console.log('start')
console.log(fs.readFileaSync("./first.txt" ,"utf-8"))
console.log(fs.writeSync("./second.txt", "writ"))

console.log('done with this task')
console.log('start the next one ')
 */
//async approch
const {readFile , writeFile} = require('fs')
console.log("start")
readFile("./first.txt" , "utf-8" ,(err , result) => {
    if(err){
        console.log(err)
        return
    }
    const second = result
    writeFile('./second.txt', "here is the result", (err,result) => {
        if(err){
            console.log(err)
            return
        }
        console.log('done withthe task')
    })
})
console.log("start the next task")
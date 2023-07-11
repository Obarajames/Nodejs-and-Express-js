const { promises } = require('dns')
const {readFile , writeFile} = require('fs')
const { result } = require('lodash')
const { resolve } = require('path')
const util = require("util")
const readFilePromise = util .promisify(readFile)
const writeFilePromise = util .promisify(writeFile)

//setting  a promise
/* const getText = (path) => {
    return new Promise ( (resolve ,reject) => {
        readFile(path , "utf-8" ,(err , result) => {
            if(err){
                reject(err)
            } else{
                resolve(result)
            }
            
        })
    })
} */
/* getText("./first.txt")
.then(result => console.log(result))
.catch(err => console.log(err)) */

const start = async() => {
    try{
        const first = await readFilePromise("./first.txt" , "utf-8")
        const second = await readFilePromise("./second.txt", "utf-8")
        await writeFilePromise("./tird.txt", "this is awsome")
        console.log(first ,second)
    }catch (error){
        console.log(error);
    }
}
start()
/* readFile("./first.txt" , "utf-8" ,(err , result) => {
    if(err){
        console.log(err)
        return
    } else{
        console.log(result)
    }
    
}) */
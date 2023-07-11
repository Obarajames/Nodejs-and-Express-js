const {reasFile , writeFile, readFile} = require('fs')

readFile("./first.txt","utf-8" , (err ,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile("./second.txt", "utf-8" ,(err,result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result;
    } )
})
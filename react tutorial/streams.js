/* const {writeFileSync} = require('fs')
for( i = 0; i < 10000; i++){
    writeFileSync('./third.txt' , "hello world", {flag: 'a'})
} */
//stream 
const {createReadStream} = require('fs')
//we initialise a stream
const stream = createReadStream('./big.txt',{highWaterMark:90, encoding:"utf-8"})

stream.on('data', (result) => {
    console.log(result)
})
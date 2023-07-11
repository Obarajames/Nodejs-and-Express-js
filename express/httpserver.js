const http = require('http');

const server = http.createServer((req, res) => {
    //request object
    const url = req.url
    const {readFileSync} = require('fs');
    //get all file
    const homepage = readFileSync('./index.html')
    
    //home
    if(url === '/'){
        res.writeHead(200 , {'content-type': 'text/html'})
        res.write(homepage)
        res.end()
    }//about
    else if(url === '/about'){
        res.writeHead(200 , {'content-type': 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }else{
        res.writeHead(404 , {'content-type': 'text/html'})
        res.write('<h1>home page</h1>')
        res.end()
    }
   

})
server.listen(5000, () => {
    console.log('server lisening on port 5000')
})

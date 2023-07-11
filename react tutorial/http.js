const http = require("http")

const server = http.createServer((req,res) => {
    //find the url being requested "/" refer to home page
    if (req.url === "/"){
        res.end("welcome to our page")
    }
    if (req.url === "/about"){
        res.end("welcome to about page")
    }
    res.end(`<h1>opps</h1>
    <p>page not available</p>`)
})
server.listen(5000)
const express = require("express");
const app  = express()
const path = require('path')
/* app.get('/' ,(req,res) => {
    res.send('home page')
})
app.get('/about', (req,res) => {
    res.send('about page')
})
//all
app.all('*',(req,res) => {
    res.status(404).send(`response not found`)
}) */
//static is a file tat te server would not Have to change
app.use(express.static('./public'))

//set up static and middleware 
//app.use is for setting app middleware
/* geting html */
app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})
//all
app.all('*',(req,res) => {
    res.status(404).send(`response not found`)
})
app.listen(5000, () => {
    console.log('server listening on port 5000')
})
// methods get ,post, put,delete, all, use,listen
const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorise= require('./authorise')
//==req => middleware => res
app.use(logger , authorise, morgan('tiny'))
app.get('/', (req,res) => {
   
    res.send('home')
})
app.get('/about', (req,res) => {
    res.send('about')
})
app.listen(3000, () => {
    console.log('server is listening on port 5000')
})
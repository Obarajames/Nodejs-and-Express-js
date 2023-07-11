const express = require('express');
const app = express();

// Serve static files from the "methods-public" folder
app.use(express.static('methods-public'));

// Route handler
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/methods-public/index.html');
});
//middleware
app.use(express.urlencoded({extended:false}))
app.post('/login' , (req,res) => {
    const {name} = req.body;
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.send('post')
})

// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

// Src all us Nodejs Scripts

// express as function as supoose like Object 

const express = require('express')
const app = express()

app.get('', (req, res)=>{
    res.send('Welcome to Express')

})
app.get('/help', (req, res)=>{x
    res.send('Welcome')

})
app.get('/about', (req, res)=>{
    res.send('India is Developed')

})

app.get('/weather', (req,res)=>{
    res.send('Weather is 55')
})


app.listen(3000, ()=>{
    console.log('Port is Listening is 3000' )

})
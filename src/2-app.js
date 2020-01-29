const path = require('path')
const express = require('./node_modules/express')


// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app =express()
const publicDirectorypath = path.join(__dirname, '../public')

app.use(express.static(publicDirectorypath))

// Html

app.get('' ,(req,res)=>{
    res.send('<h1>Welcome to WebServer using Express</h1>')
})
// JSON Data is an object
app.get('/help',(req, res)=>{
    res.send({
        name:'Andrew',
        place:'Hyderabad'
    })

})
// JSON Data is an array
app.get('/array',(req, res)=>{
    res.send([{
        name:'Andrew'
    },{
        name:'seshu'
    }])

})

app.get('/about',(req, res)=>{
    res.send('<h1>About</h1>')

})

app.get('/weather',(req, res)=>{
    res.send({
        forecast:'It is Hot',
        country:'India'
    })

})


app.listen(4000,()=>{
    console.log('Port is listening 4000')
})
const path = require('path')
const express = require('express')
const hbs = require('hbs')

//Dynamic Pages with Templating using TemplateEnginee set up is  called Handle bar
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
//express method express.json(), express.static(),express.router(), express.urlencoded()

const app =express()
const publicDirectorypath = path.join(__dirname, '../public')
// Customizing the Views Directory
const viewsPath = path.join(__dirname,'../templates/views')
// Partials -e js,hbs

const partialsPath = path.join(__dirname,'../templates/partials')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)



// Tell express which templateengine is installed and we do that new method key, to set Handlebars
//handlerengine to view Location
app.set('view engine','hbs')

//setup  static directory to serve
app.use(express.static(publicDirectorypath))


app.get('', (req, res)=>{
    res.render('index' ,{
        title:'Weather App',
        name:'Andrew'
    })
    
})

app.get('/about',(req,res)=>{
    res.render('about', {
        title:'About us',
        name:'Andrew'
    })
})
app.get('/help',(req,res)=>{
    res.render('help' ,{
        message:"This is help content",
        title:'Help',
        name:'Andrew'
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

app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must be provide a Address'
        })
    }
    res.send({
        forecast:'It is Hot',
        location:'India'
    })

})
// ?search=games ?search=games&rating=5 in express router Handler using queryString
app.get('/products', (req , res)=>{
    if(!req.query.search){
        return res.send({
            error:'you must be provide a Search term'
        })
        

    }
    console.log(req.query.search)
    
    res.send({
        products:[]
    })

})


app.get('/help/*',(req, res)=>{
    res.render('404',{
        title:'404',
        errorMessage:'Help Article is Not Found'
    })

})

// * is Match 
app.get('*', (req, res)=>{
    res.render('404', {
        title:'404',
        errorMessage:'Page is Not Found'
    })

})

app.listen(5000,()=>{
    console.log('Port is listening 5000')
})
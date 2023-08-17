let express = require('express')
let bodyParser = require('body-parser')
const {sequelize} = require('./models')

const config = require('./config/config')

const app =express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./routes')(app)

app.get('/status', function (req,res){
    res.send('Hello nodejs server safe')
})

app.get('/hello/:person', function(req,res){
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
})
  
app.post('/hello', function(req,res){
    res.send('OK you post - ' + req.body.name)
    
})
  

let port =process.env.PORT || config.port

sequelize.sync({force: false}).thet(() =>{
app.listen(port, function () {
    console.log('server runing on ' + port)
  })
})

app.listen(port, function () {
    console.log('server runing on ' + port)
  })

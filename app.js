
const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

let todos = []
todos.push({title : "Wash the car"})
todos.push({title : "Feed the dog"})

app.engine('mustache',mustacheExpress())

app.set('views','./views')
app.set('view engine','mustache')

app.get('/todos',function(req,res){
  res.render('index',{todos :todos})
})

app.post('/todo',function(req,res){

  // get the title of the task
  console.log(req.body.title)
  todos.push({title :req.body.title})
  res.render('index',{todos: todos})

})


app.listen(3000,function(){
  console.log("node server has started")
})

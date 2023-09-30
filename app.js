const express= require('express')
const mongoose=require('mongoose')

const Todo = require("./models/Todo");
const TodoSchema = new mongoose.Schema({
    todo: { type: String, required: true },
  });
  
  const Todo = mongoose.model("Todo", TodoSchema);
  
  module.exports = Todo;


  
const app=express()

mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser: true,
    useUnifiedTopology:true

})

//middlewares
app.use(express.urlencoded({extended: true}))

app.use(express.static("public"))

app.set("view engine", "ejs")

async function getTodos() {
    const todos = await Todo.find();
    return todos;
  }
  
  app.get('/', async () => {
    const todos = await getTodos();
  
    // Render the index template file, passing the todos variable.
    res.render('index', { todos });
  });
  
  



//routes
app.use(require("./routes/index.js"))

app.use(require("./routes/todo.js"))




//server configuration...

app.listen(3000, ()=> console.log("Server started listening on port:3000"))
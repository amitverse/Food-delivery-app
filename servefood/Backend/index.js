const express = require('express')
const app = express()
const port=5000
// respond with "hello world" when a GET request is made to the homepage
const mongoDB=require("./db")
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
mongoDB()
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use(express.json())
app.use('/api', require('./Routes/CreateUser'))
app.listen(port, ()=>{
    console.log(`Express is listening at ${port}`)
})
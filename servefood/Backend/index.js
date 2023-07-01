const express = require('express')
const app = express()
const port=5000
// respond with "hello world" when a GET request is made to the homepage
const mongoDB=require("./db")
mongoDB()
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use(express.json())
app.use('/api', require('./Routes/CreateUser'))
app.listen(port, ()=>{
    console.log(`Express is listening at ${port}`)
})
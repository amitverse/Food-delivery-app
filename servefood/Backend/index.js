const express = require('express')
const app = express()
const port=5000
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
const mongoDB=require("./db")
mongoDB();
app.listen(port, ()=>{
    console.log(`Express is listening at ${port}`)
})
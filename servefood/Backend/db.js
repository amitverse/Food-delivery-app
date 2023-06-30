const mongo=require('mongoose')
const mongoURL='mongodb+srv://Amit:Pathak04@fooddeliveryapp.ydngyl4.mongodb.net/?retryWrites=true&w=majority'

const mongoDB=async()=>{
    await mongo.connect(mongoURL, {useNewUrlParser: true}, (err,result)=>{
        if(err){
            console.log("--",err)
        }
        else{
            console.log("Connected")
        }
    }) 
}

module.exports=mongoDB
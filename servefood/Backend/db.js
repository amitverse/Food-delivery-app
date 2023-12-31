const { default: mongoose } = require('mongoose')
// const mongoose=require('mongoose')
// const mongoURL='mongodb+srv://Amit:Pathak04@fooddeliveryapp.ydngyl4.mongodb.net/food_details?retryWrites=true&w=majority'
const mongoURL='mongodb://Amit:Pathak04@ac-37rtecz-shard-00-00.ydngyl4.mongodb.net:27017,ac-37rtecz-shard-00-01.ydngyl4.mongodb.net:27017,ac-37rtecz-shard-00-02.ydngyl4.mongodb.net:27017/food_details?ssl=true&replicaSet=atlas-1h4cqu-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB=async()=>{
    await mongoose.connect(mongoURL, {useNewUrlParser: true}, async(err,result)=>{
        if(err){
            console.log("--",err)
        }
        else{
            console.log("Connected")
            const fetchedData = await mongoose.connection.db.collection("food_iteams")
            fetchedData.find({}).toArray(async function(err,data){
                const fetchedCat = await mongoose.connection.db.collection("food_category")
                fetchedCat.find({}).toArray(function(err,foodcat){
                    if(err){
                        console.log(err)
                    }
                    else{
                        global.foodData = data
                        global.foodCat = foodcat
                    }
                })
            })
        }
    }) 
}

module.exports=mongoDB
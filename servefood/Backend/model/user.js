const mongo=require('mongoose')
const {Schema} =mongo

const UserSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    location:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports=mongo.model('User', UserSchema)
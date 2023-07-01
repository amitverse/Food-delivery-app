const exp = require('express')
const router = exp.Router()
const user = require('../model/user')

router.post('/createuser', async (req,res)=>{
    try{
        await user.create({
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            password: req.body.password
        })
    res.json({success: true})
    }catch(err){
        console.log(err)
        res.json({success: false})
    }
})

module.exports = router
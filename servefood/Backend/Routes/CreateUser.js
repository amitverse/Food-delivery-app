const exp = require('express')
const router = exp.Router()
const user = require('../model/user')
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = "I am working on MERN stack project."
router.post('/createuser',
body('email',).isEmail(),
body('name','Invalid Name').isLength({min:3}),
body('password','Invalid Password').isLength({min:5}),
async (req,res)=>{
    const err=validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({err:err.array()})
    }
    const salt = await bcrypt.genSalt(10)
    const securePw = await bcrypt.hash(req.body.password,salt)
    try{
        await user.create({
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            password: securePw
        })
    res.json({success: true})
    }catch(err){
        console.log(err)
        res.json({success: false})
    }
})

router.post('/loginuser',
body('email','Invalid Email').isEmail(),
body('password','Invalid Password').isLength({min:5}),
async (req,res)=>{
    const err=validationResult(req)
    if(!err.isEmpty()){
        return res.status(400).json({err:err.array()})
    }
    try{
        let email=req.body.email
        let userData=await user.findOne({email})
        if(!userData){
            console.log("Wrong email")
            return res.status(400).json({err: "Login with correct credential"})
        }
        const comparePw = await bcrypt.compare(req.body.password,userData.password)
        if(!comparePw){
            console.log("Wrong password")
            return res.status(400).json({err: "Login with correct credential"})
        }

        const data = {
            user:{
                id:userData.id
            }
        }

        const authToken = jwt.sign(data,jwtSecret)
        return res.json({success: true,authToken})
    }catch(err){
        console.log(err)
        res.json({success: false})
    }
})

module.exports = router
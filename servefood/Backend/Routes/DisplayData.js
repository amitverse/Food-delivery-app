const exp = require('express')
const router = exp.Router()

router.post('/foodData', (req,res)=>{
    try {
        res.send([global.foodData,global.foodCat])
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router
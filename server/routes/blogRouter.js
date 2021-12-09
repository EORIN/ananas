const Router = require('express')
const router = new Router()
const cors = require('cors')

router.get('/', (req, res)=>{
    res.send('ITS WORK')
})

router.get('/gethtml', (req, res)=>{

})

module.exports = router
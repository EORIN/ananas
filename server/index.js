require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/blogRouter')
const needle = require('needle');
const { ne } = require('sequelize/dist/lib/operators')
const cheerio = require('cheerio');

const app = express()

const PORT = process.env.PORT || 5000

// sequelize.authenticate()
// sequelize.sync()
app.use(express.json())
app.use(cors())

// app.use('/api', router)

app.get('/', (req, res)=>{
            res.json({msg: 'HHHHHHHHH'})
            
        })

app.get('/gethtml', async (req, res)=>{

    const atr = await needle.get('https://yandex.ru/news?msid=1638826785.90484.98014.106292&mlid=1638826499.glob_225&utm_medium=topnews_news&utm_source=morda_desktop')
    
    console.log(atr)
        
    res.send(atr)
})  

app.listen(PORT, ()=>console.log(`Server started on ${PORT} PORT`))







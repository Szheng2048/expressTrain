const express = require('express')
const logger = require("morgan")
const indexRouter = require('./routes/indexRouter')
const port = 3003

const app = express()

app.use(logger('dev'))
app.use(express.json())


app.use('/', indexRouter)



app.listen(port,()=>{
    console.log(`Server Started on${port}`)
})
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require("./routes/routes.js")

//Static
app.use(express.static('public'))


//Body-Parser

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(router)


//View Engine

app.set('view engine', 'ejs')




//Porta do local host

app.listen(8080, () => {
    console.log("Servidor rodando")
})
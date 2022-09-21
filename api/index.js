const express = require ('express')
const bodyParser = require ('body-parser')


const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/teste',(req,res)=>{

    res.status(200).send({mensagem: "wELCOME TO api"})


    
})

app.listen(port, () => console.log(`servidor rodando em ${port}`))

module.exports = app
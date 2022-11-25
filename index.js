const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const basepath = path.join(__dirname, 'templates')

app.use(express.static('public'))

app.use(express.urlencoded({extended: true,}),)
//ler body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.get('/users/add', (req, res)=>{
    res.sendFile(`${basepath}/index.html`)
})

app.post('/users/save', (req, res)=>{
    console.log(req.body)
    const name = req.body.name
    const senha = req.body.senha

    res.send(`bem vindo ${name} senha: ${senha}` )
})


app.get('/', (req, res)=>{
    res.sendFile(`${basepath}/index.html`)
    console.log(req.body)
})
app.listen(port, ()=>{
    console.log(`app rodando na porta ${port}`)
})
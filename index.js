const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tess"
});

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
    const { name } = req.body;
    const { senha } = req.body;

    let mysql = "INSERT INTO customers (name, senha) VALUES (?, ?)";
    con.query(mysql, [name, senha], (err, result) => {
    res.send(result);
    });
})



app.get('/', (req, res)=>{
    res.sendFile(`${basepath}/index.html`)
    console.log(req.body)
})
app.listen(port, ()=>{
    console.log(`app rodando na porta ${port}`)
})
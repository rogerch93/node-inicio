const express = require('express');
const app = express();

app.use(express.json());
app.get("/", (req,res) =>{
    return res.json({titulo: "Como Criar Api"});
})

app.listen(8080, () =>{
    console.log("Servidor Iniciado na porta 8080: http://localhost:8080/");
})
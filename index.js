const express = require("express");

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    return res.json({
        evento: "Semana OmniStack",
        aluno: "Jonathan da Cunha Oliveira"
    });
})

app.listen(3333);